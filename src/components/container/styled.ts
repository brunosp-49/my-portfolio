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
`;
