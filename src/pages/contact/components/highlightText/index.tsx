import React from "react";
import type { HighlightTextProps } from "../../../../types";
import { SegmentSpan, StyledHighlightTextContainer } from "./styled";
export const HighlightText: React.FC<HighlightTextProps> = ({
  segments,
  fontSize,
  fontWeight,
  lineHeight,
  isBlock = false,
}) => {
  return (
    <StyledHighlightTextContainer
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      isBlock={isBlock}
    >
      {segments.map((segment, index) => (
        <SegmentSpan
          key={index}
          segmentColor={segment.color}
          segmentFontWeight={segment.fontWeight}
        >
          {segment.text}
        </SegmentSpan>
      ))}
    </StyledHighlightTextContainer>
  );
};
