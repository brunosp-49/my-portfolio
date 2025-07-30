import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Text } from "../text";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: currentColor;
  animation: ${blink} 1s step-end infinite;
  vertical-align: middle;
  margin-left: 2px;
`;

interface TypewriterTextProps {
  textToType: string;
  delay?: number;
  initialDelay?: number;
  onTypingComplete?: () => void;
  finalContent?: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  textToType,
  delay = 50,
  initialDelay = 0,
  onTypingComplete,
  finalContent,
  color,
  fontSize,
  fontWeight,
}) => {
  const [currentTypedText, setCurrentTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    let typeCharacterTimeout: NodeJS.Timeout;
    let startTypingTimeout: NodeJS.Timeout;

    const startTyping = () => {
      if (currentIndex < textToType.length) {
        typeCharacterTimeout = setTimeout(() => {
          setCurrentTypedText(
            (prevText) => prevText + textToType[currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else {
        setTypingFinished(true);
        if (onTypingComplete) {
          onTypingComplete();
        }
      }
    };

    // eslint-disable-next-line prefer-const
    startTypingTimeout = setTimeout(startTyping, initialDelay);

    return () => {
      clearTimeout(typeCharacterTimeout);
      clearTimeout(startTypingTimeout);
    };
  }, [currentIndex, delay, textToType, initialDelay, onTypingComplete]);

  return (
    <>
      {typingFinished && finalContent ? (
        finalContent
      ) : (
        <Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
          {currentTypedText}
          {!typingFinished && <Cursor />}
        </Text>
      )}
    </>
  );
};
