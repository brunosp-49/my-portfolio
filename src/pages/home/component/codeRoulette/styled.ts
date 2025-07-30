import styled from "styled-components";
export const CodeRouletteContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 13;
  max-height: 65vh; 
  @media (max-width: 1024px) {
    padding: 8px;
    max-height: 400px; 
  }
  @media (max-width: 768px) {
    max-height: 300px;
  }
`;
export const CodeDisplayArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  gap: 16px; 
  @media (max-width: 768px) {
    gap: 10px; 
  }
`;
export const CodeBlock = styled.div<{
  opacity: number;
  index: number;
  animated: boolean;
}>`
  border-radius: 6px;
  padding: 0;
  margin-top: ${({ index }) => (index === 0 ? `-${155 / 1.4}px` : "0px")};
  width: 80%; 
  max-height: 155px; 
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s ease-in-out, transform 1.3s ease-out;
  transform: translateY(${({ animated }) => (animated ? "-1px" : "50px")});
  @media (min-width: 1600px) {
    width: 474px; 
  }
  @media (max-width: 1340px) {
    width: 80%; 
    max-height: 130px; 
  }
  @media (max-width: 1024px) {
    width: 80%; 
    max-height: 100px; 
    margin-top: ${({ index }) =>
      index === 0
        ? `-${100 / 1.4}px`
        : "0px"}; 
  }
  @media (max-width: 768px) {
    width: 90%;
    max-height: 80px; 
    margin-top: ${({ index }) =>
      index === 0 ? `-${80 / 1.4}px` : "0px"}; 
  }
`;
export const CodeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;
