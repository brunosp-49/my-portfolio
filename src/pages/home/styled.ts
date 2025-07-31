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
export const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 50%; 
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 13;
  @media (max-width: 1024px) {
    padding-left: 5%;
    width: 90%; 
    height: auto; 
  }
  @media (max-width: 768px) {
    width: 95%; 
  }
`;
export const GameContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 50%; 
  min-height: 400px; 
  @media (max-width: 1024px) {
    display: none; 
  }
`;
export const TextInline = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap; 
  justify-content: flex-start; 
  @media (max-width: 1024px) {
    justify-content: center; 
  }
`;
export const Blur = styled.img`
  position: absolute;
  right: -15%;
  bottom: -20%;
  width: 1300px;
  height: 792px;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
  z-index: 12;
  @media (max-width: 1524px) {
    width: 1100px;
    height: auto;
    bottom: -40%;
  }
  @media (max-width: 1320px) {
    width: 1050px;
    height: auto;
    bottom: -40%;
    right: -18%;
  }
  @media (max-width: 1024px) {
    width: 800px;
    height: auto;
    right: -20%;
  }
  @media (max-width: 1200px) {
    width: 850px;
    height: auto;
    right: -10%;
    bottom: -15%;
  }
  @media (max-width: 450px) {
    width: 900px;
    height: auto;
    opacity: 0.9;
    right: -50%;
    bottom: -10%;
  }
`;
