
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.4, 6.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.2);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xffe599, 3.2);
    goldKeyLight.position.set(5, 7, 5);
    scene.add(goldKeyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(-5, 3, -4);
    scene.add(rimLight);

    const softFill = new THREE.PointLight(0xc5a059, 2.5, 12);
    softFill.position.set(0, 1, 3);
    scene.add(softFill);

    // Group for the entire dynamic logo ecosystem
    const ecosystemGroup = new THREE.Group();
    scene.add(ecosystemGroup);

    // 1. DIRECTIONAL GOLD SCULPTURAL FORM (Official Real Result Arrow Motif)
    // Upward-forward dynamic chevron / arrow sculpture
    const arrowShape = new THREE.Shape();
    arrowShape.moveTo(0, 1.45);        // Top point
    arrowShape.lineTo(0.75, 0.55);      // Right wing outer
    arrowShape.lineTo(0.35, 0.55);      // Right inner notch
    arrowShape.lineTo(0.35, -1.05);     // Right stem bottom
    arrowShape.lineTo(-0.35, -1.05);    // Left stem bottom
    arrowShape.lineTo(-0.35, 0.55);     // Left inner notch
    arrowShape.lineTo(-0.75, 0.55);     // Left wing outer
    arrowShape.closePath();

    const extrudeSettings = {
      steps: 3,
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 4,
    };

    const arrowGeometry = new THREE.ExtrudeGeometry(arrowShape, extrudeSettings);
    arrowGeometry.center();

    // Luxurious Metallic Gold Material
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C5A059"),
      metalness: 0.88,
      roughness: 0.18,
      envMapIntensity: 1.5,
    });

    const arrowMesh = new THREE.Mesh(arrowGeometry, goldMaterial);
    arrowMesh.rotation.z = -Math.PI * 0.03; // Dynamic forward slant
    ecosystemGroup.add(arrowMesh);

    // Complementary Dynamic Growth Ribbons (Suggesting Media Momentum & Forward Flow)
    const curvePoints = [
      new THREE.Vector3(-1.6, -1.2, 0.4),
      new THREE.Vector3(-0.9, -0.2, 0.6),
      new THREE.Vector3(0.1, 0.6, 0.3),
      new THREE.Vector3(1.1, 1.2, -0.2),
      new THREE.Vector3(1.7, 1.8, -0.6),
    ];
    const growthCurve = new THREE.CatmullRomCurve3(curvePoints);
    const growthTubeGeo = new THREE.TubeGeometry(growthCurve, 60, 0.05, 12, false);
    const growthTubeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#DFBE73"),
      metalness: 0.9,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85,
    });
    const growthRibbon = new THREE.Mesh(growthTubeGeo, growthTubeMat);
    ecosystemGroup.add(growthRibbon);

    // Secondary reverse flow ribbon
    const curvePoints2 = [
      new THREE.Vector3(-1.4, 1.4, -0.5),
      new THREE.Vector3(-0.5, 0.8, -0.1),
      new THREE.Vector3(0.5, -0.4, 0.2),
      new THREE.Vector3(1.5, -1.1, 0.4),
    ];
    const curve2 = new THREE.CatmullRomCurve3(curvePoints2);
    const tubeGeo2 = new THREE.TubeGeometry(curve2, 50, 0.035, 10, false);
    const ribbon2 = new THREE.Mesh(tubeGeo2, growthTubeMat);
    ecosystemGroup.add(ribbon2);

    // 2. ABSTRACT MEDIA NODES (The 7 Exact Channels from Client Brief)
    // SEARCH, SOCIAL, VIDEO, TV, OUTDOOR, INFLUENCER, DIGITAL
    const mediaNodesData = [
      { label: "SEARCH", pos: [1.9, 0.9, 0.2] },
      { label: "SOCIAL", pos: [-1.9, 0.7, 0.4] },
      { label: "VIDEO", pos: [1.3, -1.1, 0.6] },
      { label: "TV", pos: [-1.5, -1.0, -0.3] },
      { label: "OUTDOOR", pos: [0.2, 1.9, -0.4] },
      { label: "INFLUENCER", pos: [-0.6, -1.8, 0.5] },
      { label: "DIGITAL", pos: [2.1, -0.2, -0.5] },
    ];

    const nodeGeo = new THREE.SphereGeometry(0.08, 24, 24);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#F3E6C4"),
      emissive: new THREE.Color("#C5A059"),
      emissiveIntensity: 0.55,
      metalness: 0.8,
      roughness: 0.15,
    });

    const mediaNodes: THREE.Mesh[] = [];
    const connectionLines: THREE.Line[] = [];

    // Node beacon rings & connection beams to central arrow
    mediaNodesData.forEach((nodeItem) => {
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(nodeItem.pos[0], nodeItem.pos[1], nodeItem.pos[2]);
      ecosystemGroup.add(nodeMesh);
      mediaNodes.push(nodeMesh);

      // Delicate gold connection line to center
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0.1, 0),
        new THREE.Vector3(nodeItem.pos[0], nodeItem.pos[1], nodeItem.pos[2]),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color("#C5A059"),
        transparent: true,
        opacity: 0.35,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      ecosystemGroup.add(line);
      connectionLines.push(line);
    });

    // 3. ELEGANT GOLD ORBITAL HALO RINGS
    const ringGeo1 = new THREE.RingGeometry(2.35, 2.365, 96);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#C5A059"),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const orbitRing1 = new THREE.Mesh(ringGeo1, ringMat);
    orbitRing1.rotation.x = Math.PI / 2.6;
    orbitRing1.rotation.y = Math.PI * 0.12;
    ecosystemGroup.add(orbitRing1);

    const ringGeo2 = new THREE.RingGeometry(2.8, 2.815, 96);
    const orbitRing2 = new THREE.Mesh(ringGeo2, ringMat);
    orbitRing2.rotation.x = -Math.PI / 2.8;
    orbitRing2.rotation.y = -Math.PI * 0.15;
    ecosystemGroup.add(orbitRing2);

    // Ambient floating gold particles
    const particleCount = 75;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 7.5;
      posArray[i + 1] = (Math.random() - 0.5) * 6;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#C5A059"),
      size: 0.035,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    ecosystemGroup.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Scroll-Linked Transformation
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Window Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Mouse tilt with smooth damping
      targetRotY = mouseX * 0.4 + Math.sin(elapsed * 0.35) * 0.12;
      targetRotX = -mouseY * 0.3 + Math.cos(elapsed * 0.3) * 0.08;

      ecosystemGroup.rotation.y += (targetRotY - ecosystemGroup.rotation.y) * 0.05;
      ecosystemGroup.rotation.x += (targetRotX - ecosystemGroup.rotation.x) * 0.05;

      // Gentle continuous floating and scroll-linked downward translation
      const scrollFactor = Math.min(scrollY / 800, 1.6);
      ecosystemGroup.position.y = Math.sin(elapsed * 1.1) * 0.08 - scrollFactor * 0.95;
      ecosystemGroup.rotation.z = Math.sin(elapsed * 0.4) * 0.03 - scrollFactor * 0.1;

      // Pulsing nodes
      mediaNodes.forEach((node, i) => {
        const pulse = 1 + Math.sin(elapsed * 2.2 + i * 0.9) * 0.22;
        node.scale.set(pulse, pulse, pulse);
      });

      // Rings precession
      orbitRing1.rotation.z = elapsed * 0.07;
      orbitRing2.rotation.z = -elapsed * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Lightweight Mobile / No-WebGL Fallback
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="relative w-64 h-64 flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-gold-100/40 via-white to-gold-50/20 border border-gold-300/60 shadow-gold-subtle">
          <div className="w-44 h-44 rounded-full border border-gold/40 border-dashed animate-spin duration-[30s]" />
          <div className="absolute text-center space-y-1">
            <span className="text-4xl font-serif text-gold-700">▲</span>
            <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Real Result
            </div>
            <div className="text-[10px] text-secondary font-medium">Marketing · Media</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] select-none">
      <div
        ref={containerRef}
        className="w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] relative pointer-events-auto"
        style={{ cursor: "grab" }}
      />
      {/* Floating labels for the 7 media nodes (Desktop) */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-6 left-8 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-gold-300 text-[10px] font-mono font-bold text-primary shadow-subtle tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          TV & CTV
        </div>
        <div className="absolute top-8 right-10 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-gold-300 text-[10px] font-mono font-bold text-primary shadow-subtle tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          SEARCH & INTENT
        </div>
        <div className="absolute top-1/2 left-4 -translate-y-1/2 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-gold-300 text-[10px] font-mono font-bold text-primary shadow-subtle tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          SOCIAL & INFLUENCER
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-gold-300 text-[10px] font-mono font-bold text-primary shadow-subtle tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          DIGITAL & VIDEO
        </div>
        <div className="absolute bottom-8 left-10 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-gold-300 text-[10px] font-mono font-bold text-primary shadow-subtle tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          OUTDOOR & DOOH
        </div>
      </div>
    </div>
  );
}
