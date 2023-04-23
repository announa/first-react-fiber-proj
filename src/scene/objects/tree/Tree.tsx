import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { LinearEncoding, MeshPhysicalMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Tree = () => {
  const texture = useTexture('packeddirt_n.jpg');

  useEffect(() => {
    texture.encoding = LinearEncoding;
  }, [texture]);

  const tree = useLoader(GLTFLoader, 'model/tree/jacaranda_tree_1k.gltf');
  console.log(tree.scene)
  useEffect(() => {
    tree.scene.scale.set(3, 3, 3);
    tree.scene.position.set(0, -20, -25);
    tree.scene.traverse((obj: any) => {
      if (obj.name === "jacaranda_tree_trunk" || obj.name  ==="jacaranda_tree_branches") {
        obj.material = new MeshPhysicalMaterial({
          color: 'white',
          transmission: 0.9,
          thickness: 1,
          roughness: 0.1,
          normalMap: texture,
          clearcoat: 0.8,
          clearcoatRoughness: 0.2,
          clearcoatNormalMap: texture,
        });
      }else {
        obj.material = obj.material = new MeshPhysicalMaterial({
          transmission: 0.97,
          thickness: 0.3,
          roughness: 0.1,
        })
      }
    });
  }, [tree]);

  return <primitive object={tree.scene} />;
};
