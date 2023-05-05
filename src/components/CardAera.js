import React, { useEffect } from "react";
import styled from "@emotion/styled";
import $ from "jquery";

const CardAeraContainer = styled.section`
  width: 100%;
  height: 100px;
  padding: 15px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  // border: 1px solid red;
  div {
    width: 95px;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      aspect-ratio: 95/145;
      position: absolute;
      border-radius: 5px;
      border: 0.5px solid ${({ theme }) => theme.grey};
      background-color: ${({ theme }) => theme.white};
      :nth-of-type(2) {
        top: 25px;
      }
      :nth-of-type(3) {
        top: 50px;
      }
      :nth-of-type(4) {
        top: 75px;
      }
      :nth-of-type(5) {
        top: 100px;
      }
      :nth-of-type(6) {
        top: 125px;
      }
    }
  }
`;

const eventHandlers = {
  dragstart: (e) => {
    console.log(e.target);
    if (eventHandlers.checkLastCard(e)) {
      e.originalEvent.dataTransfer.setData("text/plain", e.target.id);
    }
  },
  dragend: () => {
    console.log("dragend");
  },
  dragenter: () => {
    console.log("dragenter");
  },
  dragover: () => {
    console.log("dragover");
  },
  dragleave: () => {
    console.log("dragleave");
  },
  drop: (e) => {
    console.log("drop");
    console.log(e);

    // if (e.target.className === "card" && eventHandlers.checkLastCard(e)) {
    //   let id = e.originalEvent.dataTransfer.getData("text/plain");
    //   $("#" + id).appendTo(e.target.parentNode);
    // }
  },
  checkLastCard: (e) => {
    return (
      e.target ===
      e.target.parentNode.children[e.target.parentNode.children.length - 1]
    );
  },
};

$(document).on("dragstart dragend", "img", (e) => {
  eventHandlers["" + e.type](e);
});

$(document).on("dragenter dragover dragleave drop", ".cardColumn", (e) => {
  e.preventDefault();
  eventHandlers["" + e.type](e);
});

const CardAera = () => {
  // useEffect(() => {
  //   const eventHandler = [
  //     {
  //       eventName: "dragstart",
  //       handler: () => {
  //         console.log("dragstart");
  //       },
  //     },
  //     {
  //       eventName: "dragend",
  //       handler: () => {
  //         console.log("dragend");
  //       },
  //     },
  //   ];
  //   const ph = document.querySelector(".ph");
  //   eventHandler.forEach(({ eventName, handler }) => {
  //     ph.addEventListener(eventName, handler);
  //   });

  //   return () => {
  //     eventHandler.forEach(({ eventName, handler }) => {
  //       ph.removeEventListener(eventName, handler);
  //     });
  //   };
  // }, []);

  let ary = [
    ["H1", "C1", "S5"],
    ["H2", "C2", "S4"],
    ["H3", "C3", "S3"],
    ["H4", "C4", "S2"],
    ["H5", "C5", "S1"],
    ["H6", "C6", "S6"],
    ["H7", "C7", "S7"],
    ["H8", "C8", "S8"],
  ];
  return (
    <CardAeraContainer>
      {ary.map((group, index) => {
        return (
          <div className="cardColumn" key={index}>
            {group.map((card) => {
              return (
                <img
                  src={require(`../img/cards-transparent/${card}.png`)}
                  alt=""
                  id={card}
                  key={card}
                  className="card"
                />
              );
            })}
          </div>
        );
      })}
    </CardAeraContainer>
  );
};

export default CardAera;
