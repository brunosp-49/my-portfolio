import styled from "styled-components";
import { theme } from "../../../../global/theme";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.slate[950]};
  border: 1px solid ${theme.colors.slate[800]};
  border-radius: 8px;
  overflow: hidden;
  height: 290px;
  max-height: 290px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ProjectImage = styled.div<{ img: string }>`
  width: 100%;
  height: 34%;
  object-fit: cover;
  display: flex;
  background-size: cover;
  justify-content: flex-end;
  align-items: start;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${(props) => props.img});
  border-bottom: 1px solid ${theme.colors.slate[700]};
`;

export const ProjectInfo = styled.div`
  padding: 0;
  display: flex;
  height: 66%;
  flex-direction: column;
`;

export const ProjectDescription = styled.p`
  font-size: ${theme.typography.fontSize.body.sm};
  color: ${theme.colors.slate[400]};
  margin: 10px 0px;
  max-height: 100px;
  line-height: 1.4;
  padding-right: 8px;
`;

export const ViewProjectButton = styled.a`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.slate[600]};
  color: #ffffff;
  width: 40%;
  border-radius: 8px;
  height: 48px;
  align-items: center;
  text-decoration: none;
  font-weight: ${theme.typography.fontWeight.medium};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${theme.colors.orange[600]};
  }
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  margin-right: 16px;
`;

export const ProjectTitle = styled.h3`
  font-size: ${theme.typography.fontSize.body["lg"]};
  margin: 0;
  margin-top: 10px;
  color: ${theme.colors.slate[100]};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 16px;
  height: 65%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: start;
  padding-left: 16px;
  height: 35%;
`;