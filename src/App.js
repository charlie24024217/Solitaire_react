import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";

import PlacementArea from "./components/PlacementArea";
import CardAera from "./components/CardAera";
import Menu from "./components/Menu";

const theme = {
  black: "#222222",
  yellow: "#FFB53E",
  white: "#FCFCFC",
  grey: "#E2E2E2",
};

const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.grey};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <PlacementArea></PlacementArea>
        <CardAera></CardAera>
        <Menu></Menu>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
