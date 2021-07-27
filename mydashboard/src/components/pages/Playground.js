import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import GameGrassDark from '../../assets/GameGrassDark.png';
import Player from "../Animation/Player";

// const tile = { width: 20, height: 24 };

const Container = styled.div`
  background-image: url(${GameGrassDark});
  height: 960px;
`;
const Wrapper = styled.section`
  padding: 40px;
`;
export default function Playground() {
  return (
  <div>
       <Container>
         <Player />
         <Wrapper>
          <Player />
         </Wrapper>
       </Container>
     </div>
  );
}

