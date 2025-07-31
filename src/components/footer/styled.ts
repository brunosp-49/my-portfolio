import styled from "styled-components";
import { theme } from "../../global/theme";

export const MainContainer = styled.div`
  height: 56px;
  width: 100%;
  z-index: 13;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${theme.colors.slate[700]};

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    height: auto;
    min-height: 56px;
    padding: 0;
    justify-content: center;
  }

  #first-block {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 16px;
    width: 10%;
    padding-left: 24px;

    @media (max-width: 1173px) {
      width: 12%;
    }

    @media (max-width: 1024px) {
      width: 36%;
      height: 100%;
      padding-left: 4%;
    }
  }

  #second-block,
  #third-block,
  #fourth-block {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-left: 1px solid ${theme.colors.slate[700]};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.slate[800]};
    }

    @media (max-width: 1024px) {
      height: auto;
      padding: 12px 0;
      border-top: none;
      width: auto;
      flex-grow: 1;
    }

    @media (max-width: 768px) {
      width: 30%;
    }
  }

  #second-block {
    width: 5%;
    margin-left: auto;

    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }

  #third-block {
    width: 5%;
  }

  #fifth-block {
    width: 68%;
    height: 100%;
    border-left: 1px solid ${theme.colors.slate[700]};
    display: flex;
    flex-grow: 1;

    @media (max-width: 1528px) {
      width: 65%;
    }

    @media (max-width: 1173px) {
      width: 60%;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  #fourth-block {
    width: 12%;
    justify-content: space-evenly;
    p {
      display: block;
    }

    @media (max-width: 1528px) {
      width: 15%;
    }

    @media (max-width: 1173px) {
      display: 18%;
    }

    @media (max-width: 1024px) {
      width: auto;
      padding: 12px 0;
      flex-grow: 1;

      p {
        display: none;
      }
    }
    @media (max-width: 768px) {
      width: auto;
      order: 0;
    }
  }
`;
