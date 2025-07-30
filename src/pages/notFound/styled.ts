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
    overflow-y: auto;
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
    padding-bottom: 40px;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    padding: 0;
    gap: 0;
  }
`;
export const TabRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  justify-content: flex-start;
  padding-top: 5%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const CodeSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const TabLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5%;
  height: 100%;
  width: 45%;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
  }
`;
export const TextInline = styled.div`
  display: flex;
  gap: 8px;
`;
