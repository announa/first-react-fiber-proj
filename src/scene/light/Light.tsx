export const Light = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <spotLight color='white' intensity={0.3} position={[-3, 2, 5]} />
      <rectAreaLight intensity={1} width={2} height={1} position={[-2, 2, 5]} />
    </>
  );
};
