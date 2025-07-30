import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Link, Text } from "../../components/text";
import {
  Blur,
  Content,
  GameContainer,
  SubContainer,
  TextContainer,
  TextInline,
} from "./styled";
import backgroundBlur from "../../assets/background blurs.png";
import { Divider } from "../../components/divider";
import { theme } from "../../global/theme";
import { TypewriterText } from "../../components/typerWriterText";
import { CodeRoulette } from "./component/codeRoulette";
export const Home = () => {
  const charDelay = 1;

  const line1Text = "Hi there, I am";
  const line2Text = "Bruno Siqueira";
  const line3Text = "> Full Stack developer";
  const line4Text = "// complete the game to continue";
  const line5Text = "// find my profile on Github:";
  const line6TypedText = `const githubLink = "https://github.com/brunosp-49"`;

  const delay1 = 0;
  const delay2 = line1Text.length * charDelay + 1;
  const delay3 = delay2 + line2Text.length * charDelay + 1;
  const delay4 = delay3 + line3Text.length * charDelay + 1;
  const delay5 = delay4 + line4Text.length * charDelay + 1;
  const delay6 = delay5 + line5Text.length * charDelay + 1;

  return (
    <Container>
      <SubContainer>
        <Header />
        <Content>
          <TextContainer>
            <TypewriterText
              textToType={line1Text}
              initialDelay={delay1}
              color={theme.colors.slate[400]}
            />
            <TypewriterText
              textToType={line2Text}
              initialDelay={delay2}
              fontSize={theme.typography.fontSize.heading.h1}
              color={theme.colors.slate[100]}
            />
            <TypewriterText
              textToType={line3Text}
              initialDelay={delay3}
              fontSize={theme.typography.fontSize.heading.h4}
              color={theme.colors.indigo[500]}
            />
            <Divider height={"40px"} /> {/* Divider appears instantly */}
            <TypewriterText
              textToType={line4Text}
              initialDelay={delay4}
              color={theme.colors.slate[400]}
            />
            <TypewriterText
              textToType={line5Text}
              initialDelay={delay5}
              color={theme.colors.slate[400]}
            />
            <TypewriterText
              textToType={line6TypedText}
              initialDelay={delay6}
              finalContent={
                <TextInline>
                  <Text color={theme.colors.indigo[500]}>const</Text>
                  <Text color={theme.colors.teal[400]}>githubLink</Text>
                  <Text color={theme.colors.grey[100]}>=</Text>
                  <Link
                    color={theme.colors.rose[300]}
                    href="https://github.com/brunosp-49"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    "https://github.com/brunosp-49"
                  </Link>
                </TextInline>
              }
            />
          </TextContainer>
          <GameContainer>
            <CodeRoulette />
          </GameContainer>
        </Content>
        <Blur src={backgroundBlur} />
        <Footer />
      </SubContainer>
    </Container>
  );
};
