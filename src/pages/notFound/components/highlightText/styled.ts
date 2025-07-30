import styled from "styled-components";
import { theme } from "../../../../global/theme";
import type { HighlightTextProps } from "../../../../types";
export const StyledHighlightTextContainer = styled.div<Pick<HighlightTextProps, 'fontSize' | 'fontWeight' | 'lineHeight' | 'isBlock'>>`
  margin: 0;
  padding: 0;
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline')}; 
  font-family: 'Fira Code', 'Consolas', monospace; 
  font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize.body.md};
  line-height: ${({ lineHeight }) => lineHeight || theme.typography.lineHeight.body.md};
  font-weight: ${({ fontWeight }) => fontWeight || theme.typography.fontWeight.regular};
  white-space: pre-wrap; 
  @media (max-width: 1024px) {
    font-size: ${({ fontSize }) => {
      const getResponsiveFontSize = (desktopFontSize?: string): string => {
        if (!desktopFontSize) {
          return theme.typography.fontSize.body.sm;
        }
        switch (desktopFontSize) {
          case theme.typography.fontSize.body.xs: return theme.typography.fontSize.body.xs;
          case theme.typography.fontSize.body.sm: return theme.typography.fontSize.body.sm;
          case theme.typography.fontSize.body.md: return theme.typography.fontSize.body.sm;
          case theme.typography.fontSize.body.lg: return theme.typography.fontSize.body.md;
          case theme.typography.fontSize.body.xl: return theme.typography.fontSize.body.lg;
          case theme.typography.fontSize.body["2xl"]: return theme.typography.fontSize.body.xl;
          case theme.typography.fontSize.body["3xl"]: return theme.typography.fontSize.body["2xl"];
          case theme.typography.fontSize.body["4xl"]: return theme.typography.fontSize.body["3xl"];
          case theme.typography.fontSize.body["5xl"]: return theme.typography.fontSize.body["4xl"];
          case theme.typography.fontSize.heading.h6: return theme.typography.fontSize.body.xl;
          case theme.typography.fontSize.heading.h5: return theme.typography.fontSize.body["2xl"];
          case theme.typography.fontSize.heading.h4: return theme.typography.fontSize.body["3xl"];
          case theme.typography.fontSize.heading.h3: return theme.typography.fontSize.body["4xl"];
          case theme.typography.fontSize.heading.h2: return theme.typography.fontSize.heading.h4;
          case theme.typography.fontSize.heading.h1: return theme.typography.fontSize.heading.h3;
          default: return desktopFontSize;
        }
      };
      return getResponsiveFontSize(fontSize);
    }};
  }
`;
export const SegmentSpan = styled.span<{ segmentColor?: string; segmentFontWeight?: string }>`
  color: ${({ segmentColor }) => segmentColor || 'inherit'};
  font-weight: ${({ segmentFontWeight }) => segmentFontWeight || 'inherit'};
`;