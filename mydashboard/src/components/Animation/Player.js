import React from "react";
import styled from "styled-components";

import Tile from "./Tile";
import Sprite from "./Sprite";
import sideAnimation from "../../assets/topdown_shooter/characters/1_side.png";
import gun from "../../assets/topdown_shooter/guns/cannon/cannon_side.png";

const Container = styled.div`
  position: relative;
`;

const Gun = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

export default class Player extends React.Component {
  render() {
    return (
      <Container>
        <Gun 
            top={17}
            left={19}
        >
          <Tile 
            src={gun} 
            state={0} 
            tile={{ width: 17, height: 17 }} 
            scale={1.5}
          />
        </Gun>
        <Sprite
          src={sideAnimation}
          states={4}
          tile={{ width: 20, height: 24 }}
          scale={2}
          framesPerStep={8}
        />
      </Container>
    );
  }
}