import styled from "styled-components";
import { theme } from "../../global/theme";
export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  @media (max-width: 1024px) {
    max-width: 100%;
    border-radius: 0;
  }
`;
export const AccordionItemWrapper = styled.div<{
  level: number;
  isExpandable: boolean;
}>`
  border-bottom: ${({ level, isExpandable }) =>
      level === 0 && isExpandable ? "1px" : "0px"}
    solid ${theme.colors.slate[700]};
  &:first-child {
    border-top: none;
  }
`;
export const AccordionHeader = styled.div<{
  isOpen: boolean;
  level: number;
  isClickable: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ level }) =>
    level === 0 ? "16px 24px" : level === 2 ? "4px 6px" : "4px 6px"};
  border-bottom: ${({ level, isOpen }) => (level === 0 && isOpen ? "1px" : "0px")} solid
    ${theme.colors.slate[700]};
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
  color: ${theme.colors.slate[200]};
  font-size: ${theme.typography.fontSize.body.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ isClickable, level }) =>
      level > 0
        ? "transparent"
        : isClickable
        ? theme.colors.slate[700]
        : theme.colors.slate[800]};
  }
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 1024px) {
    padding: 12px 16px;
    font-size: ${theme.typography.fontSize.body.md};
  }
`;
export const AccordionTitleContainer = styled.div<{ level: number }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: ${({ level }) => level * 20}px;
  @media (max-width: 1024px) {
    padding-left: ${({ level }) => level * 15}px;
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  background-color: ${theme.colors.slate[900]};
  color: ${theme.colors.slate[400]};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "16px 24px" : "0 24px")};
  @media (max-width: 1024px) {
    padding: ${({ isOpen }) => (isOpen ? "12px 16px" : "0 16px")};
  }
`;
export const AccordionContentText = styled.p`
  font-size: ${theme.typography.fontSize.body.md};
  line-height: ${theme.typography.lineHeight.body.md};
  @media (max-width: 1024px) {
    font-size: ${theme.typography.fontSize.body.sm};
    line-height: ${theme.typography.lineHeight.body.sm};
  }
`;
