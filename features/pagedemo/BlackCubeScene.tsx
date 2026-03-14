'use client';

import React, { useMemo, useRef, forwardRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --- 1. Texture Generator ---
function useGridTexture() {
  return useMemo(() => {
    if (typeof document === 'undefined') return null;

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, 512, 512);
      ctx.fillStyle = '#222222';
      const gap = 5;
      const radius = 8;
      
      for (let x = 0; x < 512; x += gap) {
        for (let y = 0; y < 512; y += gap) {
          ctx.beginPath();
          ctx.arc(x + gap/2, y + gap/2, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);
}

// --- 2. Cubelet Component ---
const Cubelet = forwardRef(({ position, textureType }: any, ref: any) => {
  const gridTexture = useGridTexture();

  const materialProps = useMemo(() => {
    const base = {
      color: '#080808',
      metalness: 0.6,
      roughness: 0.2,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
    };

    if (textureType === 1) { // Matte
      return { ...base, roughness: 0.8, metalness: 0.1, clearcoat: 0 };
    }
    if (textureType === 2 && gridTexture) { // Textured
      return { 
        ...base, 
        map: gridTexture, 
        roughness: 0.4,
        bumpMap: gridTexture,
        bumpScale: 0.02
      };
    }
    return base;
  }, [textureType, gridTexture]);

  return (
    <RoundedBox
      ref={ref}
      args={[0.95, 0.95, 0.95]} 
      radius={0.05} 
      smoothness={4}
      position={position}
    >
      <meshPhysicalMaterial {...materialProps} />
    </RoundedBox>
  );
});
Cubelet.displayName = 'Cubelet';

// --- 3. The Assembled Cube ---
const CubeAssembly = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pivotRef = useRef<THREE.Group>(null);
  const cubeRefs = useRef<(THREE.Mesh | null)[]>([]);

  // Animation State
  const state = useRef({
    isAnimating: false,
    rotationProgress: 0,
    targetRotation: Math.PI, // 180 degrees
    nextMove: 'F', 
    cooldown: 1.0, 
  });

  const cubeData = useMemo(() => {
    const cubes = [];
    let index = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const textureType = Math.abs(x + y + z) % 3; 
          cubes.push({ position: [x, y, z], textureType, id: index++ });
        }
      }
    }
    return cubes;
  }, []);

  useFrame((_, delta) => {
    // 1. GLOBAL TUMBLE (2-AXIS CONTINUOUS ROTATION)
    if (groupRef.current) {
      // Rotation on Y (Yaw)
      groupRef.current.rotation.y += delta * 0.4; 
      // Rotation on X (Pitch) - Combining these creates the "Tumble"
      groupRef.current.rotation.x += delta * 0.25;
    }

    // 2. RUBIK'S LOGIC
    if (!pivotRef.current || !groupRef.current) return;

    if (state.current.isAnimating) {
      const speed = 5.0 * delta; 
      state.current.rotationProgress += speed;

      if (state.current.rotationProgress >= state.current.targetRotation) {
        pivotRef.current.rotation.z = state.current.targetRotation;

        const children = [...pivotRef.current.children];
        children.forEach(child => {
            groupRef.current?.attach(child);
        });

        pivotRef.current.rotation.set(0,0,0);
        state.current.isAnimating = false;
        state.current.rotationProgress = 0;
        state.current.nextMove = state.current.nextMove === 'F' ? 'B' : 'F';
        state.current.cooldown = Math.random() * 2 + 0.5; 
      } else {
        pivotRef.current.rotation.z = state.current.rotationProgress;
      }

    } else {
      state.current.cooldown -= delta;

      if (state.current.cooldown <= 0) {
        const isFront = state.current.nextMove === 'F';
        cubeRefs.current.forEach((mesh) => {
          if (mesh) {
            // Because the logic relies on LOCAL positions, 
            // the global tumbling does not break the puzzle logic.
            if (isFront && mesh.position.z > 0.5) {
              pivotRef.current?.attach(mesh);
            } else if (!isFront && mesh.position.z < -0.5) {
              pivotRef.current?.attach(mesh);
            }
          }
        });
        state.current.isAnimating = true;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={pivotRef} />
      {cubeData.map((data, i) => (
        <Cubelet 
            key={i} 
            // @ts-ignore
            ref={(el) => (cubeRefs.current[i] = el)}
            position={data.position} 
            textureType={data.textureType} 
        />
      ))}
    </group>
  );
};

// --- 4. Main Scene Component ---
export default function BlackCubeScene() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#000' }}>
      <Canvas camera={{ position: [4, 4, 4], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        
        <Environment preset="studio" />
        
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="blue" />

        <CubeAssembly />
        
        <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={4} 
        />

        {/* Camera Auto-Rotate (Y-axis orbit) + Object Tumble (X/Y-axis) 
           creates a chaotic, multi-axis visual effect.
        */}
        <OrbitControls 
          enableZoom={false} 
          autoRotate={true} 
          autoRotateSpeed={4.0} 
          rotateSpeed={4.0} 
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
}