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
  }
`;
export const MenuLeft = styled.div`
  display: flex;
  height: 100%;
  width: calc(25% + 24px);
  border-right: 1px solid ${theme.colors.slate[700]};
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    flex-grow: 1;
    justify-content: flex-start;
    border-right: none;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 75%; 
  height: 100%; 
  box-sizing: border-box;
  overflow: hidden; 
  @media (max-width: 1024px) {
    height: auto;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 0;
    gap: 0;
  }
`;
export const TabHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  width: 100%;
  background-color: ${theme.colors.slate[900]};
  border-bottom: 1px solid ${theme.colors.slate[700]};
  min-height: 56px; 
  overflow-x: auto; 
  -webkit-overflow-scrolling: touch; 
  flex-shrink: 0; 
  @media (max-width: 1024px) {
    min-height: auto;
    flex-wrap: nowrap; 
  }
`;
export const TabContainer = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px; 
  border-right: 1px solid ${theme.colors.slate[700]}; 
  color: ${({ active }) =>
    active ? theme.colors.slate[200] : theme.colors.slate[400]};
  background-color: ${({ active }) => active && theme.colors.slate[800]};
  font-size: ${theme.typography.fontSize.body.md};
  font-weight: ${({ active }) =>
    active
      ? theme.typography.fontWeight.semibold
      : theme.typography.fontWeight.regular};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0; 
  &:hover {
    background-color: ${({ active }) => active && theme.colors.slate[700]};
    color: ${theme.colors.slate[200]};
  }
  @media (max-width: 1024px) {
    padding: 10px 12px;
    font-size: ${theme.typography.fontSize.body.sm};
  }
`;
export const TabTitle = styled.span`
  margin-right: 8px; 
  white-space: nowrap; 
`;
export const CloseTabButton = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.slate[400]};
  font-size: 1rem;
  cursor: pointer;
  margin-left: 4px; 
  transition: color 0.2s;
  &:hover {
    color: ${theme.colors.slate[200]};
  }
`;
export const TabContentArea = styled.div`
  flex-grow: 1; 
  padding: 24px; 
  padding-top: 60px; 
  padding-bottom: 45px; 
  overflow-y: auto; 
  color: ${theme.colors.slate[200]}; 
  height: 0; 
  min-height: 0; 
  box-sizing: border-box; 
  pre {
    border-radius: 4px;
    padding: 16px;
    background-color: purple;
    overflow-x: auto;
    overflow-y: auto;
    white-space: pre-wrap;
    font-family: "Fira Code", "Consolas", monospace;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    height: auto; 
  }
`;
export const TextInline = styled.div`
  display: flex;
  gap: 8px;
`;
export const ProjectsContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: flex-start;
  width: calc(100% - 36px);
  padding-left: 36px;
  @media (max-width: 1024px) {
    justify-content: center;
    padding-left: 0;
    width: 100%;
  }
`;
export const TechIcon = styled.img`
  width: 24px; 
  height: 24px;
  border-radius: 4px;
  object-fit: contain;
  z-index: 2;
`;
export const NoProjectsMessage = styled.p`
  color: ${theme.colors.slate[400]};
  font-size: ${theme.typography.fontSize.body.lg};
  text-align: center;
  margin-top: 50px;
`;
