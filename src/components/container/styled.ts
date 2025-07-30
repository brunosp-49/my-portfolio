import styled from "styled-components";
import { theme } from "../../global/theme";
export const MainContainer = styled.div`
  height: 100dvh;
  width: 100vw;
  background-color: ${theme.colors.slate[950]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  z-index: 1;
  @media (max-width: 1024px) {
    height: auto;
    min-height: 100dvh;
    align-items: flex-start;
  }

  *::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: #10172b;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #b8c0c2;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #b8c0c2;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: #90a1b9;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #bad0ef;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #bad0ef;
  }
`;
