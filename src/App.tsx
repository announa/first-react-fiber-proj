import { Canvas } from '@react-three/fiber';
import styled, { createGlobalStyle } from 'styled-components';
import { NoToneMapping } from 'three';
import { Scene } from './scene/Scene';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
}
`;

const CanvasContainer = styled.div`
  height: 100vh;
`;

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <CanvasContainer id='canvas-container'>
        <Canvas gl={{ antialias: true, toneMapping: NoToneMapping }} linear>
          <Scene />
        </Canvas>
      </CanvasContainer>
    </>
  );
};
