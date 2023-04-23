
export const Light = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <spotLight color='#ffffff' intensity={3} position={[-8, 25, 5]} />
    </>
  );
};
