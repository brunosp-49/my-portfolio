import styled from "styled-components";
import { theme } from "../../../../global/theme";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${theme.typography.fontSize.body.md};
  color: ${theme.colors.slate[200]};
  gap: 24px;
  padding: 8px 0; /* Padding para a área clicável */

  &:hover {
    color: ${theme.colors.slate[100]};
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Esconde o checkbox nativo
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  background: ${({ checked }) =>
    checked ? theme.colors.orange[500] : theme.colors.slate[700]};
  border: 1px solid
    ${({ checked }) =>
      checked ? theme.colors.orange[600] : theme.colors.slate[600]};
  border-radius: 4px;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* Impede que o checkbox encolha */

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${theme.colors.orange[300]};
  }

  svg {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
    fill: none;
    stroke: white;
    stroke-width: 2px;
  }
`;
