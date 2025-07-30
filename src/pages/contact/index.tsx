import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Content, SubContainer } from "./styled";
export const Contact = () => {
  return (
    <Container>
      <SubContainer>
        <Header />
        <Content></Content>
        <Footer />
      </SubContainer>
    </Container>
  );
};
