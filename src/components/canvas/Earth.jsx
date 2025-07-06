import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("/planet/scene.gltf");

  // Avoid unnecessary recalculations
  const earthScene = useMemo(() => scene, [scene]);

  return (
    <primitive object={earthScene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => (
  <Canvas
    shadows
    dpr={window.devicePixelRatio}
    gl={{ preserveDrawingBuffer: true }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
      <Preload all />
    </Suspense>
  </Canvas>
);

export default EarthCanvas;