import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

export const Camera = () => {
  return (
    <>
      <OrbitControls target={[0, 0, 0]} />
      <PerspectiveCamera position={[0, 0, 14]} makeDefault />
    </>
  );
};
