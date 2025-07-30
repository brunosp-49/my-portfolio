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
export const MenuLeft = styled.div`
  display: flex;
  height: 100%;
  width: calc(25% + 24px);
  border-right: 1px solid ${theme.colors.slate[700]};
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    justify-content: flex-start;
    border-right: none;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  width: 75%;
  height: 100%;
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
  width: 60%;
  height: 100%;
  border-left: 1px solid ${theme.colors.slate[700]};
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const CodeSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 38px;
  box-sizing: border-box;
`;
export const TabLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;
  gap: 24px;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
  }
`;
export const TextInline = styled.div`
  display: flex;
  gap: 8px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (max-width: 1024px) {
    width: 85%;
    justify-content: flex-start;
  }
`;
export const InputLabel = styled.p`
  width: 100%;
  font-size: ${theme.typography.fontSize.body.md};
  color: ${theme.colors.slate[400]};
`;
export const Input = styled.input`
  max-width: 100%;
  padding: 8px 16px;
  margin-bottom: 8px;
  height: 34px;
  font-family: "Fira Code", "Consolas", monospace;
  border-radius: 8px;
  border: 1px solid ${theme.colors.slate[700]};
  background-color: ${theme.colors.slate[950]};
  color: ${theme.colors.slate[400]};
  font-size: ${theme.typography.fontSize.body.md};
  &:focus {
    outline: none;
    border-width: 1px;
    border-color: ${theme.colors.slate[300]};
  }
`;
export const InputMultiline = styled.textarea`
  max-width: 100%;
  padding: 16px 16px;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 22px;
  resize: none;
  border: 1px solid ${theme.colors.slate[700]};
  background-color: ${theme.colors.slate[950]};
  color: ${theme.colors.slate[400]};
  font-size: ${theme.typography.fontSize.body.md};
  &:focus {
    outline: none;
    border-width: 1px;
    border-color: ${theme.colors.slate[300]};
  }
`;
export const ButtonContainer = styled.div<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  :hover {
    background-color: ${({ disabled }) =>
      disabled ? theme.colors.slate[700] : theme.colors.orange[200]};
  }
  :active {
    background-color: ${({ disabled }) =>
      disabled ? theme.colors.slate[700] : theme.colors.orange[400]};
  }
  width: 100%;
`;
export const ButtonSend = styled.div<{ disabled: boolean }>`
  width: 140px;
  align-self: start;
  height: 44px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  padding: 0px 8px;
  border-radius: 8px;
  color: ${({ disabled }) =>
    disabled ? theme.colors.slate[500] : theme.colors.slate[950]};
  background-color: ${({ disabled }) =>
    disabled ? theme.colors.slate[700] : theme.colors.orange[300]};
`;
export const SentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (max-width: 1024px) {
    width: 85%;
    justify-self: flex-start;
  }
`;
