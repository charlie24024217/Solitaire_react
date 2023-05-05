import React from "react";
import styled from "@emotion/styled";

import King from "../img/king_happy.png";
import C from "../img/C.png";
import D from "../img/D.png";
import H from "../img/H.png";
import S from "../img/S.png";

const PlacementAreaContainer = styled.section`
  width: 100%;
  height: 145px;
  margin: 50px 0 30px 0;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
`;
const Placement = styled.div`
  width: 425px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  div {
    height: 100%;
    aspect-ratio: 95/145;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.white};
    border-radius: 5px;
    opacity: 0.6;
  }
  .whiteBG {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.white};
    img {
      width: 40%;
    }
  }
`;
const Logo = styled.div`
  min-width: 80px;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  img {
    width: 80px;
  }
  span {
    font: normal normal bold 14px/17px Lato;
    letter-spacing: 1.4px;
    color: ${({ theme }) => theme.black};
  }
`;

const PlacementArea = () => {
  return (
    <PlacementAreaContainer>
      <Placement>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Placement>
      <Logo>
        <img src={King} alt="2365" />
        <span>FREESELL</span>
      </Logo>
      <Placement>
        <div className="whiteBG">
          <img src={C} alt="C" />
        </div>
        <div className="whiteBG">
          <img src={D} alt="D" />
        </div>
        <div className="whiteBG">
          <img src={H} alt="H" />
        </div>
        <div className="whiteBG">
          <img src={S} alt="S" />
        </div>
      </Placement>
    </PlacementAreaContainer>
  );
};

export default PlacementArea;
