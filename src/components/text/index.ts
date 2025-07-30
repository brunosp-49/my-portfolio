import styled from "styled-components";
import { theme } from "../../global/theme";

const getResponsiveFontSize = (desktopFontSize?: string): string => {
  if (!desktopFontSize) {
    return theme.typography.fontSize.body.sm;
  }

  switch (desktopFontSize) {
    case theme.typography.fontSize.body.xs:
      return theme.typography.fontSize.body.xs;
    case theme.typography.fontSize.body.sm:
      return theme.typography.fontSize.body.xs;
    case theme.typography.fontSize.body.md:
      return theme.typography.fontSize.body.sm; // md -> sm
    case theme.typography.fontSize.body.lg:
      return theme.typography.fontSize.body.md; // lg -> md
    case theme.typography.fontSize.body.xl:
      return theme.typography.fontSize.body.lg; // xl -> lg
    case theme.typography.fontSize.body["2xl"]:
      return theme.typography.fontSize.body.xl; // 2xl -> xl
    case theme.typography.fontSize.body["3xl"]:
      return theme.typography.fontSize.body["2xl"]; // 3xl -> 2xl
    case theme.typography.fontSize.body["4xl"]:
      return theme.typography.fontSize.body["3xl"]; // 4xl -> 3xl
    case theme.typography.fontSize.body["5xl"]:
      return theme.typography.fontSize.body["4xl"]; // 5xl -> 4xl

    case theme.typography.fontSize.heading.h6:
      return theme.typography.fontSize.body.lg; // h6 -> body.lg
    case theme.typography.fontSize.heading.h5:
      return theme.typography.fontSize.heading.h6; // h5 -> h6
    case theme.typography.fontSize.heading.h4:
      return theme.typography.fontSize.heading.h5; // h4 -> h5
    case theme.typography.fontSize.heading.h3:
      return theme.typography.fontSize.heading.h4; // h3 -> h4
    case theme.typography.fontSize.heading.h2:
      return theme.typography.fontSize.heading.h3; // h2 -> h3
    case theme.typography.fontSize.heading.h1:
      return theme.typography.fontSize.heading.h2; // h1 -> h2

    default:
      return desktopFontSize;
  }
};

export const Text = styled.p<{
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  zIndex?: number;
}>`
  font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize.body.md};
  font-weight: ${({ fontWeight }) =>
    fontWeight || theme.typography.fontWeight.regular};
  color: ${({ color }) => color || theme.colors.slate[400]};
  margin: 0;
  ${({ zIndex }) =>
    zIndex &&
    `
    z-index: ${zIndex};
  `}

  @media (max-width: 1342px) {
    font-size: ${({ fontSize }) => getResponsiveFontSize(fontSize)};
  }

  @media (max-width: 1024px) {
    font-size: ${({ fontSize }) =>
      fontSize || theme.typography.fontSize.body.md};
  }
`;

export const Link = styled.a<{
  href: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}>`
  font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize.body.md};
  font-weight: ${({ fontWeight }) =>
    fontWeight || theme.typography.fontWeight.regular};
  color: ${({ color }) => color || theme.colors.slate[400]};
  margin: 0;

  @media (max-width: 1024px) {
    font-size: ${({ fontSize }) => getResponsiveFontSize(fontSize)};
  }
`;
