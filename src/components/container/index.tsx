import { MainContainer } from "./styled";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainContainer>
        {children}
    </MainContainer>
  );
};
