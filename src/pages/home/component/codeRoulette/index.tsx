import React, { useState, useEffect, useCallback } from "react";
import codeImg1 from "../../../../assets/code-snippet.png";
import codeImg2 from "../../../../assets/code-snippet2.png";
import codeImg3 from "../../../../assets/code-snippet3.png";
import {
  CodeBlock,
  CodeDisplayArea,
  CodeImage,
  CodeRouletteContainer,
} from "./styled";

const codeSnippets = [codeImg3, codeImg2, codeImg3, codeImg2, codeImg1];

export const CodeRoulette: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const displayedSnippetIndices = [0, 1, 2, 3, 4];
  const centralDisplayIndex = Math.floor(2);

  const getOpacity = useCallback((displayRelativeIndex: number) => {
    const distance = Math.abs(displayRelativeIndex - centralDisplayIndex);
    switch (distance) {
      case 0:
        return 1;
      case 1:
        return 0.35;
      case 2:
        return 0.15;
      case 3:
        return 0.05;
      case 4:
        return 0.02;
      default:
        return 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visibleSnippets = displayedSnippetIndices.map(
    (actualIndex, displayRelativeIndex) => ({
      index: actualIndex,
      src: codeSnippets[(actualIndex + 2) % codeSnippets.length],
      displayRelativeIndex: displayRelativeIndex,
    })
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 100);
  }, []);

  return (
    <CodeRouletteContainer>
      <CodeDisplayArea>
        {visibleSnippets.map((item, index) => (
          <CodeBlock
            key={item.index}
            index={index}
            opacity={getOpacity(item.displayRelativeIndex)}
            animated={animated}
          >
            <CodeImage src={item.src} alt={`Code Snippet ${item.index + 1}`} />
          </CodeBlock>
        ))}
      </CodeDisplayArea>
    </CodeRouletteContainer>
  );
};
