import type { FC } from "react";
import { theme } from "../../../../global/theme";

interface ArrowIconProps {
  isOpened?: boolean;
  // Adicionando props para as cores, para que o Accordion possa controlá-las
  baseColor?: string; // Cor quando fechado
  openedColor?: string; // Cor quando aberto
  size?: number; // Permite controlar o tamanho do SVG
}

export const ArrowIcon: FC<ArrowIconProps> = ({
  isOpened,
  baseColor = theme.colors.slate[500], // Default para fechado
  openedColor = theme.colors.grey[50], // Default para aberto
  size = 12, // Default size
}) => {
  // Calcula a cor de preenchimento com base no estado 'isOpened'
  const arrowFillColor = isOpened ? openedColor : baseColor;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Usa a prop size
      height={size} // Usa a prop size
      viewBox="0 0 6 9" // Mantém o viewBox original para proporção
      fill="none" // O fill do SVG é none, mas o path tem seu próprio fill
      style={{
        transform: `rotate(${isOpened ? "90deg" : "0deg"})`,
        transition: "transform 0.3s ease-in-out",
        transformOrigin: "center center", // Explicitamente define o centro de rotação
      }}
    >
      <path
        d="M3.78115 4.50047L0.481293 1.20062L1.42411 0.257812L5.66675 4.50047L1.42411 8.74306L0.481293 7.80027L3.78115 4.50047Z"
        fill={arrowFillColor} // Aplica a cor calculada diretamente ao path
      />
    </svg>
  );
};
