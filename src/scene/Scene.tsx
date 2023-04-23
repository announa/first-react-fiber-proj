import { Environment } from '@react-three/drei';
import { Camera } from './camera/Camera';
import { Light } from './light/Light';
import { Objects } from './objects/Objects';

export const Scene = () => {
  return (
    <>
      <Camera />
      <Light />
      <Environment files='misty_pines_2k.hdr' background />
      <Objects />
    </>
  );
};
