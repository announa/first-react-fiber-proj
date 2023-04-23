import { useTexture } from '@react-three/drei';
import { forwardRef, useEffect } from 'react';
import { LinearEncoding, Mesh, RepeatWrapping } from 'three';

export const Icosahedron = forwardRef<Mesh>((pros, ref) => {
  const texture = useTexture('packeddirt_n.jpg');

  useEffect(() => {
    texture.encoding = LinearEncoding;
  }, [texture]);

  return (
    <mesh ref={ref} position={[10, 0, 0]} >
      <icosahedronGeometry args={[5, 0]} />
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
