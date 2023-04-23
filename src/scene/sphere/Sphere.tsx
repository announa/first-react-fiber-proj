import { forwardRef } from 'react';
import { Mesh } from 'three';

export const Sphere = forwardRef<Mesh>((pros, ref) => {
  return (
    <mesh ref={ref} position={[-5, 0, 0]}>
      <sphereGeometry args={[1, 32, 64]} />
      <meshPhysicalMaterial roughness={0} transmission={1} thickness={0.9} />
    </mesh>
  );
});
