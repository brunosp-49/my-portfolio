import styled from "styled-components";
import { theme } from "../../global/theme";
export const SubContainer = styled.div`
  height: calc(100dvh - 140px);
  width: calc(100vw - 140px);
  background-color: ${theme.colors.slate[900]};
  display: flex;
  align-items: center; 
  flex-direction: column;
  justify-content: space-between;
  margin: 70px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.slate[700]};
  position: relative;
  overflow: hidden;
  z-index: 2;
  @media (max-width: 1024px) {
    min-height: calc(100dvh - 40px); 
    width: calc(100vw - 40px); 
    margin: 20px; 
    justify-content: flex-start; 
  }
  @media (max-width: 768px) {
    min-height: calc(100dvh - 25px); 
    width: calc(100vw - 40px);
    margin: 10px;
  }
`;
export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center; 
  padding-left: 10%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    flex-direction: column; 
    padding-left: 0; 
    justify-content: flex-start; 
    align-items: center; 
    height: auto; 
    gap: 32px; 
  }
`;
