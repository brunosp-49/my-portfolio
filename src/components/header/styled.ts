import styled from "styled-components";
import { theme } from "../../global/theme";
import { PageName } from "../../types";
export interface Props {
  selectedPage: PageName;
  isMenuOpen: boolean;
  disabled?: boolean;
}
export const HeaderTopBar = styled.div<Props>`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.slate[700]};
  position: relative;
  z-index: 11;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  #first-block {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 16px;
    width: 25%;
    padding-left: 24px;
    @media (max-width: 1024px) {
      width: auto;
      flex-grow: 1;
      justify-content: flex-start;
      padding-left: 16px;
      border-right: none;
    }
  }
  #second-block,
  #third-block,
  #fourth-block,
  #sixty-block {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-left: 1px solid ${theme.colors.slate[700]};
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.slate[800]};
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
  #second-block {
    border-bottom: ${(props) =>
        props.selectedPage === PageName.Hello ? "3px" : "1px"}
      solid
      ${(props) =>
        props.selectedPage === PageName.Hello
          ? theme.colors.orange[300]
          : theme.colors.slate[700]};
    width: 10%;
    margin-left: auto;
  }
  #third-block {
    border-bottom: ${(props) =>
        props.selectedPage === PageName.AboutMe ? "3px" : "1px"}
      solid
      ${(props) =>
        props.selectedPage === PageName.AboutMe
          ? theme.colors.orange[300]
          : theme.colors.slate[700]};
    width: 10%;
  }
  #fourth-block {
    border-bottom: ${(props) =>
        props.selectedPage === PageName.Projects ? "3px" : "1px"}
      solid
      ${(props) =>
        props.selectedPage === PageName.Projects
          ? theme.colors.orange[300]
          : theme.colors.slate[700]};
    width: 10%;
  }
  #fifth-block {
    border-bottom: 1px solid ${theme.colors.slate[700]};
    width: 33%;
    height: 100%;
    border-left: 1px solid ${theme.colors.slate[700]};
    @media (max-width: 1024px) {
      display: none;
    }
  }
  #sixty-block {
    border-bottom: ${(props) =>
        props.selectedPage === PageName.ContactMe ? "3px" : "1px"}
      solid
      ${(props) =>
        props.selectedPage === PageName.ContactMe
          ? theme.colors.orange[300]
          : theme.colors.slate[700]};
    width: 12%;
  }
`;
export const MainContainer = styled.div<Props>`
  height: 56px;
  width: 100%;
  user-select: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
  flex-direction: row;
  background-color: ${theme.colors.slate[900]};
  @media (max-width: 1024px) {
    height: auto;
    min-height: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "56px")};
    flex-direction: column;
    align-items: flex-start;
    border-bottom: none;
    border-bottom-left-radius: ${({ isMenuOpen }) =>
      isMenuOpen ? "0" : "8px"};
    border-bottom-right-radius: ${({ isMenuOpen }) =>
      isMenuOpen ? "0" : "8px"};
    transition: min-height 0.2s ease-in-out,
      border-bottom-left-radius 0.2s ease-in-out,
      border-bottom-right-radius 0.2s ease-in-out;
    z-index: 15;
  }
`;
export const HamburgerIcon = styled.button<{ isMenuOpen: boolean }>`
  display: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 10px;
  z-index: 11;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
    gap: 7px;
    width: 42px;
    height: 40px;
    margin-left: auto;
    margin-right: 16px;
  }
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.slate[500]};
    border-radius: 1px;
    transition: all 0.3s ease-in-out;
    transform-origin: 1px;
  }
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg);
      width: 28px;
    }
    span:nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
      width: 28px;
    }
  `}
`;
export const MobileMenuContent = styled.div<{ isMenuOpen: boolean }>`
  display: none;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  transition: max-height 0.1s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
  pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? "auto" : "none")};
  max-height: ${({ isMenuOpen }) =>
    isMenuOpen ? "calc(100dvh - 56px - 140px)" : "0"};
  box-sizing: border-box;
  @media (max-width: 1024px) {
    height: 100%;
    max-height: ${({ isMenuOpen }) => (isMenuOpen ? "calc(100dvh)" : "0")};
    display: flex;
    flex-direction: column;
    z-index: 16;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    padding: ${({ isMenuOpen }) =>
      isMenuOpen ? "10px 0px 0px 0px" : "0 16px"};
  }
  span {
    width: 100%;
  }
`;
export const MobileMenuItem = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  width: 100%;
  height: 48px;
  font-size: ${theme.typography.fontSize.body.lg};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${({ selectedPage, children }) =>
    selectedPage === children
      ? theme.colors.orange[300]
      : theme.colors.slate[200]};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: color 0.2s, background-color 0.2s;
  border-bottom: 1px solid ${theme.colors.slate[700]};
  &:hover {
    color: ${theme.colors.orange[300]};
    background-color: ${({ disabled }) =>
      disabled ? theme.colors.slate[900] : theme.colors.slate[800]};
  }
`;
