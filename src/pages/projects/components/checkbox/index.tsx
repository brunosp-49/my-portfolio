// src/components/checkbox/index.tsx
import React from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "./styled";

const CheckmarkIcon = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  icon: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  icon,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={handleChange} />
      <StyledCheckbox checked={checked}>
        <CheckmarkIcon />
      </StyledCheckbox>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexGrow: 1,
        }}
      >
        {icon}
        {label}
      </div>
    </CheckboxContainer>
  );
};
