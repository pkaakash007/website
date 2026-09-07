"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function MediaCity3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChannel, setActiveChannel] = useState("OOH / DOOH");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f0f0e, 0.08);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 3.2, 7.5);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xc5a059, 2.2);
    directional.position.set(5, 8, 4);
    scene.add(directional);

    // Abstract Minimal City / Media Grid
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // Ground Grid
    const gridHelper = new THREE.GridHelper(24, 24, 0xc5a059, 0x2a2a28);
    gridHelper.position.y = -0.5;
    cityGroup.add(gridHelper);

    // Abstract Monolithic Buildings
    const buildings: THREE.Mesh[] = [];
    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x141414,
      roughness: 0.8,
      metalness: 0.2,
    });

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x2e2e2a,
    });

    // Generate clean grid towers
    for (let x = -4; x <= 4; x += 2) {
      for (let z = -6; z <= 2; z += 2.5) {
        if (Math.abs(x) < 1 && z > -2) continue; // Keep center alley clear
        const height = 0.8 + Math.random() * 2.2;
        const geo = new THREE.BoxGeometry(1.1, height, 1.1);
        const mesh = new THREE.Mesh(geo, buildingMat);
        mesh.position.set(x, height / 2 - 0.5, z);
        cityGroup.add(mesh);
        buildings.push(mesh);

        const edges = new THREE.EdgesGeometry(geo);
        const line = new THREE.LineSegments(edges, edgeMat);
        line.position.copy(mesh.position);
        cityGroup.add(line);
      }
    }

    // Media Billboards / Screens positioned in the scene
    const billboardData = [
      { name: "OOH / DOOH", pos: [-1.4, 2.2, -1], color: 0xc5a059 },
      { name: "Television", pos: [1.6, 2.0, -1.8], color: 0xffffff },
      { name: "Digital", pos: [-1.8, 1.5, 1], color: 0xdfbe73 },
      { name: "Social", pos: [1.8, 1.6, 0.5], color: 0xc5a059 },
      { name: "Search", pos: [0, 2.6, -3], color: 0xffffff },
    ];

    const billboardMeshes: { mesh: THREE.Mesh; name: string }[] = [];

    billboardData.forEach((b) => {
      const boardGeo = new THREE.PlaneGeometry(1.6, 0.9);
      const boardMat = new THREE.MeshStandardMaterial({
        color: b.color,
        emissive: b.color,
        emissiveIntensity: 0.35,
        roughness: 0.2,
        metalness: 0.5,
        side: THREE.DoubleSide,
      });

      const boardMesh = new THREE.Mesh(boardGeo, boardMat);
      boardMesh.position.set(b.pos[0], b.pos[1], b.pos[2]);
      boardMesh.rotation.y = (b.pos[0] > 0 ? -0.3 : 0.3);
      cityGroup.add(boardMesh);
      billboardMeshes.push({ mesh: boardMesh, name: b.name });

      // Frame around billboard
      const frameGeo = new THREE.BoxGeometry(1.65, 0.95, 0.05);
      const frameMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.copy(boardMesh.position);
      frame.rotation.copy(boardMesh.rotation);
      frame.position.z -= 0.03;
      cityGroup.add(frame);
    });

    // Gold directional guide beams
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -0.4, 4),
      new THREE.Vector3(0.5, 0.5, 1),
      new THREE.Vector3(-0.3, 1.2, -1.5),
      new THREE.Vector3(0, 2.2, -4),
    ]);
    const beamGeo = new THREE.TubeGeometry(curve, 30, 0.035, 6, false);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xc5a059,
      transparent: true,
      opacity: 0.8,
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    cityGroup.add(beam);

    // Mouse movement
    let mouseX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Camera drift & slight orbit
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.04;
      cityGroup.position.z = Math.sin(t * 0.3) * 0.3;

      // Pulse billboard glows
      billboardMeshes.forEach((b, i) => {
        const mat = b.mesh.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 0.25 + Math.sin(t * 2 + i * 1.5) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] lg:h-[540px] rounded-3xl overflow-hidden bg-charcoal border border-charcoal-border">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Floating Info Overlays */}
      <div className="absolute top-6 left-6 z-10 max-w-xs">
        <div className="text-[10px] font-mono uppercase tracking-widest text-gold mb-1 font-bold">
          3D Abstract Media Landscape
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">
          Omnichannel Visibility Grid
        </h3>
        <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
          From prime outdoor billboards to digital broadcast networks, Real Result orchestrates media presence where real attention lives.
        </p>
      </div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-charcoal-border/80">
        <div className="flex flex-wrap items-center gap-2">
          {["Television", "OOH / DOOH", "Digital Media", "Social", "Search"].map((channel) => (
            <span
              key={channel}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-white/90 border border-white/15"
            >
              ✦ {channel}
            </span>
          ))}
        </div>

        <div className="text-[11px] font-mono text-gold-300">
          Scroll to explore channel impact →
        </div>
      </div>
    </div>
  );
}
