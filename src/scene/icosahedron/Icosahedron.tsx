import { forwardRef } from 'react';
import { Mesh } from 'three';

export const Icosahedron = forwardRef<Mesh>((pros, ref) => {
  return (
    <mesh ref={ref} position={[3, 1, -1]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial transmission={1} thickness={1} roughness={0.2} />
    </mesh>
  );
});
