import { useTexture } from '@react-three/drei';
import { forwardRef, useEffect } from 'react';
import { LinearEncoding, Mesh } from 'three';

export const Icosahedron = forwardRef<Mesh>((pros, ref) => {
  const texture = useTexture('packeddirt_n.jpg');

  useEffect(() => {
    texture.encoding = LinearEncoding;
  }, [texture]);

  return (
    <mesh ref={ref} position={[5, -2, 0]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        color='white'
        transmission={0.9}
        thickness={1}
        roughness={0.3}
        normalMap={texture}
        clearcoat={0.4}
        clearcoatRoughness={1}
        clearcoatNormalMap={texture}
      />
    </mesh>
  );
});
