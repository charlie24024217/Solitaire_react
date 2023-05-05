import React from "react";
import styled from "@emotion/styled";

import info from "../img/info.png";

const MenuContainer = styled.section`
  width: 100%;
  height: 80px;
  padding: 20px 0;
  border-top: 1px solid #cccccc;
  display: flex;
  gap: 10px;
  div {
    height: 40px;
    display: flex;
    &:nth-of-type(1) {
      width: 40px;
      border: 2px solid ${({ theme }) => theme.black};
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      width: 100px;
      flex-grow: 1;
      align-items: center;
      gap: 20px;
      span {
        text-align: left;
        font: normal normal bold 14px/17px Lato;
        letter-spacing: 1.4px;
      }
    }
    &:nth-of-type(3) {
      width: 540px;
      display: flex;
      justify-content: space-between;
      button {
        width: 23%;
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.black};
        border-radius: 50vmin;
        border: 0;
        text-align: center;
        font: normal normal 900 12px/15px Lato;
        letter-spacing: 1.2px;
        cursor: pointer;
        :hover {
          background-color: ${({ theme }) => theme.yellow};
        }
      }
    }
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <div>
        <img src={info} alt="" />
      </div>
      <div>
        <span>TIME: 00:00</span>
        <span>SCORE: 0</span>
      </div>
      <div>
        <button>NEW GAME</button>
        <button>RESTART</button>
        <button>HINT</button>
        <button>UNDO</button>
      </div>
    </MenuContainer>
  );
};

export default Menu;
