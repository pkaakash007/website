"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const MEDIA_CHANNELS = [
  { name: "TV", type: "broadcast", pos: [-2.4, 1.2, 0.4] },
  { name: "CTV / OTT", type: "streaming", pos: [-1.4, 2.1, -0.6] },
  { name: "OUTDOOR", type: "billboard", pos: [0.0, 1.8, 0.8] },
  { name: "CINEMA", type: "screen", pos: [1.6, 2.0, -0.3] },
  { name: "DIGITAL", type: "web", pos: [2.5, 0.9, 0.5] },
  { name: "SEARCH", type: "intent", pos: [2.2, -0.8, -0.4] },
  { name: "SOCIAL", type: "mobile", pos: [1.1, -1.9, 0.6] },
  { name: "INFLUENCER", type: "creator", pos: [-0.3, -2.1, -0.5] },
  { name: "RADIO", type: "audio", pos: [-1.8, -1.6, 0.5] },
  { name: "PRINT", type: "editorial", pos: [-2.6, -0.3, -0.4] },
];

export default function MediaUniverse3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting (Warm editorial museum/gallery lighting)
    const ambientLight = new THREE.AmbientLight(0xfffdfa, 1.4);
    scene.add(ambientLight);

    const goldKey = new THREE.DirectionalLight(0xffe299, 2.8);
    goldKey.position.set(6, 8, 5);
    scene.add(goldKey);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.8);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    // Master Installation Group
    const universeGroup = new THREE.Group();
    scene.add(universeGroup);

    // 1. ABSTRACT MEDIA MONOLITHS / FLOATING PLANES
    // Frosted dark acrylic slabs with beveled edges and luminous gold outlines
    const slabMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#121212"),
      metalness: 0.8,
      roughness: 0.25,
      envMapIntensity: 1.2,
    });

    const goldAccentMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C5A059"),
      metalness: 0.9,
      roughness: 0.15,
      emissive: new THREE.Color("#8E6D2E"),
      emissiveIntensity: 0.3,
    });

    const channelMeshes: THREE.Mesh[] = [];
    const positions: THREE.Vector3[] = [];

    MEDIA_CHANNELS.forEach((ch, idx) => {
      // Create sleek sculptural rectangular media panel
      const width = 0.7 + (idx % 3) * 0.15;
      const height = 0.5 + ((idx + 1) % 3) * 0.12;
      const slabGeo = new THREE.BoxGeometry(width, height, 0.06);
      const slabMesh = new THREE.Mesh(slabGeo, slabMaterial);

      slabMesh.position.set(ch.pos[0], ch.pos[1], ch.pos[2]);
      slabMesh.rotation.y = (idx % 2 === 0 ? 0.25 : -0.25) * (Math.PI / 4);
      slabMesh.rotation.x = ((idx % 3) - 1) * 0.1;

      // Gold frame edge
      const edgeGeo = new THREE.EdgesGeometry(slabGeo);
      const edgeLine = new THREE.LineSegments(
        edgeGeo,
        new THREE.LineBasicMaterial({ color: new THREE.Color("#C5A059"), transparent: true, opacity: 0.8 })
      );
      slabMesh.add(edgeLine);

      // Gold focal core dot
      const dotGeo = new THREE.SphereGeometry(0.04, 16, 16);
      const dot = new THREE.Mesh(dotGeo, goldAccentMaterial);
      dot.position.z = 0.04;
      slabMesh.add(dot);

      universeGroup.add(slabMesh);
      channelMeshes.push(slabMesh);
      positions.push(new THREE.Vector3(ch.pos[0], ch.pos[1], ch.pos[2]));
    });

    // 2. GOLD INTERCONNECTION BEAMS (Tying the Ecosystem Together)
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#C5A059"),
      transparent: true,
      opacity: 0.35,
    });

    for (let i = 0; i < positions.length; i++) {
      const nextIdx = (i + 1) % positions.length;
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        positions[i],
        positions[nextIdx],
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      universeGroup.add(line);

      // Add secondary cross-hub connection
      if (i % 2 === 0) {
        const crossIdx = (i + 4) % positions.length;
        const crossGeo = new THREE.BufferGeometry().setFromPoints([
          positions[i],
          positions[crossIdx],
        ]);
        const crossLine = new THREE.Line(
          crossGeo,
          new THREE.LineBasicMaterial({ color: new THREE.Color("#DFBE73"), transparent: true, opacity: 0.2 })
        );
        universeGroup.add(crossLine);
      }
    }

    // 3. CENTRAL HARMONIC SCULPTURAL RING (Elegance & Momentum)
    const ringGeo = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#C5A059"),
      transparent: true,
      opacity: 0.25,
    });
    const torusRing = new THREE.Mesh(ringGeo, ringMat);
    torusRing.rotation.x = Math.PI / 2.4;
    universeGroup.add(torusRing);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Scroll Transformation
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize
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

      targetY = mouseX * 0.35 + Math.sin(elapsed * 0.3) * 0.15;
      targetX = -mouseY * 0.25 + Math.cos(elapsed * 0.25) * 0.08;

      universeGroup.rotation.y += (targetY - universeGroup.rotation.y) * 0.04;
      universeGroup.rotation.x += (targetX - universeGroup.rotation.x) * 0.04;

      // Scroll changes the camera angle smoothly across media environments
      const scrollProgress = (scrollY % 2000) / 2000;
      camera.position.z = 7.2 + Math.sin(scrollProgress * Math.PI * 2) * 0.6;
      camera.position.y = Math.cos(scrollProgress * Math.PI * 2) * 0.4;

      // Gentle floating motion for each channel panel
      channelMeshes.forEach((mesh, idx) => {
        mesh.position.y = positions[idx].y + Math.sin(elapsed * 1.5 + idx * 0.7) * 0.06;
      });

      torusRing.rotation.z = elapsed * 0.06;

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
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-64 h-64 rounded-full border border-gold/40 border-dashed animate-spin duration-[30s]" />
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
    </div>
  );
}
