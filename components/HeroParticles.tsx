"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function HeroParticles() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── GRID — energy lattice ──────────────────────────────────
    const gridGroup = new THREE.Group();

    // Primary grid lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0x8b1040, transparent: true, opacity: 0.22 });
    const GRID_SIZE = 65;
    const STEP = 5;
    for (let x = -GRID_SIZE; x <= GRID_SIZE; x += STEP) {
      const pts = [new THREE.Vector3(x, -GRID_SIZE, -22), new THREE.Vector3(x, GRID_SIZE, -22)];
      gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
    }
    for (let y = -GRID_SIZE; y <= GRID_SIZE; y += STEP) {
      const pts = [new THREE.Vector3(-GRID_SIZE, y, -22), new THREE.Vector3(GRID_SIZE, y, -22)];
      gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
    }

    // Accent diagonal lines for energy feel
    const accentMat = new THREE.LineBasicMaterial({ color: 0xb01850, transparent: true, opacity: 0.12 });
    for (let i = -8; i <= 8; i += 2) {
      const pts = [new THREE.Vector3(-50, i * 5 - 20, -18), new THREE.Vector3(50, i * 5 + 20, -18)];
      gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), accentMat));
    }

    scene.add(gridGroup);

    // ── MAIN PARTICLES ─────────────────────────────────────────
    const COUNT = 280;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);

    const colScarlet = new THREE.Color(0x8b1040);
    const colClay    = new THREE.Color(0x9a5060);
    const colTaupe   = new THREE.Color(0xd4c4be);
    const colWhite   = new THREE.Color(0xffffff);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      velocities[i * 3]     = (Math.random() - 0.5) * 0.012;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.009;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;

      const t = Math.random();
      let c: THREE.Color;
      if (t < 0.15) { c = colWhite; sizes[i] = 0.45; }       // bright nodes
      else if (t < 0.35) { c = colTaupe; sizes[i] = 0.3; }
      else if (t < 0.65) { c = colClay; sizes[i] = 0.2; }
      else { c = colScarlet; sizes[i] = 0.18; }

      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // ── ENERGY PULSE PARTICLES ──────────────────────────────────
    // Bright fast-moving nodes that travel horizontally like power flow
    const PULSE_COUNT = 18;
    const pulsePositions = new Float32Array(PULSE_COUNT * 3);
    const pulseSpeeds = new Float32Array(PULSE_COUNT);

    for (let i = 0; i < PULSE_COUNT; i++) {
      pulsePositions[i * 3]     = (Math.random() - 0.5) * 70;
      pulsePositions[i * 3 + 1] = Math.round((Math.random() - 0.5) * 8) * 5; // snap to grid rows
      pulsePositions[i * 3 + 2] = -5 + Math.random() * 10;
      pulseSpeeds[i] = 0.04 + Math.random() * 0.08;
    }

    const pulseGeo = new THREE.BufferGeometry();
    pulseGeo.setAttribute("position", new THREE.BufferAttribute(pulsePositions, 3));

    const pulseMat = new THREE.PointsMaterial({
      size: 0.5,
      color: 0xff3366,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const pulseDots = new THREE.Points(pulseGeo, pulseMat);
    scene.add(pulseDots);

    // ── CONNECTION LINES between nearby nodes ───────────────────
    const connectionGeo = new THREE.BufferGeometry();
    const connectionPositions: number[] = [];
    const CONNECT_DIST = 9;

    function updateConnections() {
      connectionPositions.length = 0;
      const pos = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          if (Math.sqrt(dx*dx + dy*dy + dz*dz) < CONNECT_DIST) {
            connectionPositions.push(
              pos[i*3], pos[i*3+1], pos[i*3+2],
              pos[j*3], pos[j*3+1], pos[j*3+2]
            );
          }
        }
      }
      connectionGeo.setAttribute("position", new THREE.Float32BufferAttribute(connectionPositions, 3));
    }
    updateConnections();

    const connectionMat = new THREE.LineBasicMaterial({ color: 0xa03050, transparent: true, opacity: 0.2 });
    const connectionLines = new THREE.LineSegments(connectionGeo, connectionMat);
    scene.add(connectionLines);

    // ── MOUSE PARALLAX ──────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── RESIZE ──────────────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── ANIMATE ─────────────────────────────────────────────────
    let frame = 0;
    let animId: number;
    const pos = geo.attributes.position.array as Float32Array;
    const pp  = pulseGeo.attributes.position.array as Float32Array;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame++;

      // Move main particles
      for (let i = 0; i < COUNT; i++) {
        pos[i*3]     += velocities[i*3];
        pos[i*3+1]   += velocities[i*3+1];
        pos[i*3+2]   += velocities[i*3+2];
        if (Math.abs(pos[i*3])   > 35) velocities[i*3]   *= -1;
        if (Math.abs(pos[i*3+1]) > 22) velocities[i*3+1] *= -1;
        if (Math.abs(pos[i*3+2]) > 12) velocities[i*3+2] *= -1;
      }
      geo.attributes.position.needsUpdate = true;

      // Move pulse particles horizontally (energy flow)
      for (let i = 0; i < PULSE_COUNT; i++) {
        pp[i*3] += pulseSpeeds[i];
        if (pp[i*3] > 36) pp[i*3] = -36;
      }
      pulseGeo.attributes.position.needsUpdate = true;

      // Pulse opacity breathing
      pulseMat.opacity = 0.5 + 0.3 * Math.sin(frame * 0.04);

      // Update connections every 4 frames
      if (frame % 4 === 0) updateConnections();

      // Camera parallax
      camera.position.x += (mouseX * 4 - camera.position.x) * 0.025;
      camera.position.y += (mouseY * 2.5 - camera.position.y) * 0.025;
      camera.lookAt(scene.position);

      // Slow grid rotation
      gridGroup.rotation.z += 0.00015;
      gridGroup.position.x = Math.sin(frame * 0.0008) * 1.5;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
