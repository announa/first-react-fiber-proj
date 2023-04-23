import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { Icosahedron } from '../icosahedron/Icosahedron';
import { Sphere } from '../sphere/Sphere';

export const Objects = () => {
  const box = useRef<Mesh>(null);
  const sphere = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (box.current) {
      box.current.rotation.x = clock.getElapsedTime();
    }
    if (sphere.current) {
      sphere.current.position.x = -1.5 + Math.cos(clock.getElapsedTime() / 5);
      sphere.current.position.y = Math.sin(clock.getElapsedTime() / 5);
    }
  });

  return (
    <>
      <Icosahedron ref={box} />
      <Sphere ref={sphere} />
    </>
  );
};
