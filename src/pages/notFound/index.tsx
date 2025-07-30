import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import {
  CodeSubContainer,
  Content,
  RightContainer,
  SubContainer,
  TabLeftContainer,
  TabRightContainer,
} from "./styled";
import { HighlightText } from "./components/highlightText";
import { theme } from "../../global/theme";
import { ErrorIcon } from "./components/svg";
import { useLocation } from "react-router";
export const NotFound = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Container>
      <SubContainer>
        <Header />
        <Content>
          <RightContainer>
            <TabLeftContainer>
              <ErrorIcon />
            </TabLeftContainer>
            <TabRightContainer>
              <CodeSubContainer>
                <HighlightText
                  fontSize={theme.typography.fontSize.body.lg}
                  lineHeight={theme.typography.lineHeight.body.lg}
                  isBlock
                  segments={[
                    { text: "const ", color: theme.colors.purple[300] },
                    { text: "page ", color: theme.colors.teal[300] },
                    { text: "= ", color: theme.colors.slate[200] },
                    { text: "findPage", color: theme.colors.orange[300] },
                    { text: "(", color: theme.colors.grey[100] },
                    { text: `'${currentPath}'`, color: theme.colors.rose[300] },
                    { text: ");", color: theme.colors.slate[200] },
                  ]}
                />
                <HighlightText
                  fontSize={theme.typography.fontSize.body.lg}
                  lineHeight={theme.typography.lineHeight.body.lg}
                  isBlock
                  segments={[
                    { text: "\nif ", color: theme.colors.purple[300] },
                    { text: "(", color: theme.colors.grey[100] },
                    { text: "!", color: theme.colors.indigo[300] },
                    { text: "page", color: theme.colors.grey[100] },
                    { text: ")", color: theme.colors.grey[100] },
                    { text: " {\n", color: theme.colors.slate[200] },
                    { text: "\tconsole.log", color: theme.colors.indigo[300] },
                    { text: "(", color: theme.colors.grey[100] },
                    {
                      text: `"Oops! Looks like you took a wrong\n \tturn in the codebase."`,
                      color: theme.colors.rose[300],
                    },
                    { text: ");\n", color: theme.colors.grey[100] },
                    { text: "\tconsole.log", color: theme.colors.indigo[300] },
                    { text: "(", color: theme.colors.grey[100] },
                    {
                      text: `"But hey, since you're here..."`,
                      color: theme.colors.rose[300],
                    },
                    { text: ");\n", color: theme.colors.grey[100] },
                    { text: "\tconsole.log", color: theme.colors.indigo[300] },
                    { text: "(", color: theme.colors.grey[100] },
                    {
                      text: `"🔍 Go back to the homepage and \n\texplore more cool stuff!"`,
                      color: theme.colors.rose[300],
                    },
                    { text: ");\n", color: theme.colors.grey[100] },
                    { text: "\ttrow new ", color: theme.colors.purple[300] },
                    { text: "Error", color: theme.colors.indigo[300] },
                    { text: "(", color: theme.colors.grey[100] },
                    {
                      text: `"404: PageNotFoundError 😢"`,
                      color: theme.colors.rose[300],
                    },
                    { text: ");\n", color: theme.colors.grey[100] },
                    { text: "\n}", color: theme.colors.slate[200] },
                    { text: "\n", color: theme.colors.slate[200] },
                    { text: "\n", color: theme.colors.slate[200] },
                    {
                      text: `/* Suggestions:\n`,
                      color: theme.colors.slate[400],
                    },
                    {
                      text: ` * - Check the URL for typos\n`,
                      color: theme.colors.slate[400],
                    },
                    {
                      text: ` * - Use the site navigation\n`,
                      color: theme.colors.slate[400],
                    },
                    {
                      text: ` * - Or hit CMD+Z in real life 😅\n`,
                      color: theme.colors.slate[400],
                    },
                    {
                      text: `*/\n`,
                      color: theme.colors.slate[400],
                    },
                    { text: "\n", color: theme.colors.slate[200] },
                    { text: "redirect", color: theme.colors.indigo[300] },
                    { text: "(", color: theme.colors.grey[100] },
                    {
                      text: `'home'`,
                      color: theme.colors.rose[300],
                    },
                    { text: ");", color: theme.colors.grey[100] },
                  ]}
                />
              </CodeSubContainer>
            </TabRightContainer>
          </RightContainer>
        </Content>
        <Footer />
      </SubContainer>
    </Container>
  );
};
