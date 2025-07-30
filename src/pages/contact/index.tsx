import { Accordion } from "../../components/accordion";
import { AccordionTitleContainer } from "../../components/accordion/styled";
import { Container } from "../../components/container";
import { Divider } from "../../components/divider";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { EmailIcon } from "./components/icons/emailIcon";
import { PhoneIcon } from "./components/icons/phoneIcon";
import {
  ButtonContainer,
  ButtonSend,
  CodeSubContainer,
  Content,
  Input,
  InputContainer,
  InputLabel,
  InputMultiline,
  MenuLeft,
  RightContainer,
  SentContainer,
  SubContainer,
  TabLeftContainer,
  TabRightContainer,
} from "./styled";
import { Link, Text } from "../../components/text";
import { HighlightText } from "./components/highlightText";
import { theme } from "../../global/theme";
import { useEffect, useState } from "react";
import { ExternalIcon } from "./components/icons/externalIcon";
import useWeb3forms from "@web3forms/react";
import LoadingSpinner from "../../components/loadingSpinner";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isFormComplete =
      name.trim() !== "" && isEmailValid && message.trim() !== "";
    setIsDisabled(!isFormComplete);
  }, [name, email, message]);

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const { submit: onSubmit } = useWeb3forms({
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string,
    onSuccess: (msg, data) => {
      console.log("Error sending email:", msg, data);
      setEmail("");
      setName("");
      setMessage("");
      setEmailSent(true);
      setIsLoading(false);
    },
    onError: (msg, data) => {
      console.error("Error sending email:", msg, data);
      setEmailSent(false);
      setIsLoading(false);
    },
  });

  const sendEmail = () => {
    {
      if (isDisabled || isLoading) return;
      setIsLoading(true);
      onSubmit({
        name,
        email,
        message,
      });
    }
  };

  return (
    <Container>
      <SubContainer>
        <Header />
        <Content>
          <MenuLeft>
            <Accordion
              allowMultipleOpen
              items={[
                {
                  title: "contact",
                  content: (
                    <>
                      <AccordionTitleContainer level={0}>
                        <EmailIcon />
                        <Link
                          href="mailto:brunospdev@gmail.com"
                          target="_blank"
                        >
                          brunospdev@gmail.com
                        </Link>
                      </AccordionTitleContainer>
                      <Divider height={"8px"} /> {}
                      <AccordionTitleContainer level={0}>
                        <PhoneIcon />
                        <Link
                          href="https://api.whatsapp.com/send?phone=5512988870530"
                          target="_blank"
                        >
                          +55 12 98887-0530
                        </Link>
                      </AccordionTitleContainer>
                    </>
                  ),
                },
                {
                  title: "find-me-also-in",
                  content: (
                    <>
                      <AccordionTitleContainer level={0}>
                        <ExternalIcon />
                        <Link
                          href="https://www.linkedin.com/in/bruno-siqueira-de-paulo/"
                          target="_blank"
                        >
                          Linkedin
                        </Link>
                      </AccordionTitleContainer>
                      <Divider height={"8px"} /> {}
                      <AccordionTitleContainer level={0}>
                        <ExternalIcon />
                        <Link
                          href="https://github.com/brunosp-49"
                          target="_blank"
                        >
                          Github
                        </Link>
                      </AccordionTitleContainer>
                    </>
                  ),
                },
              ]}
            />
          </MenuLeft>
          <RightContainer>
            <TabLeftContainer>
              {!emailSent ? (
                <InputContainer>
                  <InputLabel>_name</InputLabel>
                  <Input
                    value={name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Name"
                  />
                  <InputLabel>_email</InputLabel>
                  <Input
                    value={email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Email"
                  />
                  <InputLabel>_message</InputLabel>
                  <InputMultiline
                    value={message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Message"
                  />
                  <ButtonContainer disabled={isDisabled || isLoading}>
                    <ButtonSend
                      disabled={isDisabled || isLoading}
                      onClick={sendEmail}
                    >
                      {isLoading ? <LoadingSpinner /> : "submit-message"}
                    </ButtonSend>
                  </ButtonContainer>
                </InputContainer>
              ) : (
                <SentContainer>
                  <Text
                    color={theme.colors.grey[100]}
                    fontSize={theme.typography.fontSize.body["2xl"]}
                  >
                    Thank you! 🤘
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    Your message has been accepted.
                  </Text>
                  <Text style={{ marginTop: "-10px", textAlign: "center" }}>
                    You will receive answer soon!
                  </Text>
                  <Divider height={2} />
                  <ButtonSend
                    style={{ alignSelf: "center", width: "160px" }}
                    disabled={false}
                    onClick={() => setEmailSent(false)}
                  >
                    send-new-message
                  </ButtonSend>
                </SentContainer>
              )}
            </TabLeftContainer>
            <TabRightContainer>
              <CodeSubContainer>
                <HighlightText
                  fontSize={theme.typography.fontSize.body.lg}
                  lineHeight={theme.typography.lineHeight.body.lg}
                  isBlock // Define o container como 'block'
                  segments={[
                    { text: "const ", color: theme.colors.purple[300] },
                    { text: "button ", color: theme.colors.teal[300] },
                    { text: "= ", color: theme.colors.slate[200] },
                    { text: "document", color: theme.colors.orange[300] },
                    { text: ".querySelector(", color: theme.colors.slate[200] },
                    { text: "'#sendBtn'", color: theme.colors.rose[300] },
                    { text: ");", color: theme.colors.slate[200] },
                  ]}
                />
                <HighlightText
                  fontSize={theme.typography.fontSize.body.lg}
                  lineHeight={theme.typography.lineHeight.body.lg}
                  isBlock
                  segments={[
                    { text: "\nconst ", color: theme.colors.purple[300] }, // \n para quebra de linha
                    { text: "message ", color: theme.colors.teal[300] },
                    { text: "= {\n", color: theme.colors.slate[200] },
                    { text: "\tname", color: theme.colors.indigo[300] },
                    { text: ": ", color: theme.colors.slate[200] },
                    { text: `"${name}"`, color: theme.colors.rose[300] },
                    { text: ",\n", color: theme.colors.slate[200] },
                    { text: `\temail`, color: theme.colors.indigo[300] },
                    { text: ": ", color: theme.colors.slate[200] },
                    {
                      text: `"${email}"`,
                      color: theme.colors.rose[300],
                    },
                    { text: ",\n", color: theme.colors.slate[200] },
                    { text: "\tmessage", color: theme.colors.indigo[300] },
                    { text: ": ", color: theme.colors.slate[200] },
                    {
                      text: `"${message}"`,
                      color: theme.colors.rose[300],
                    },
                    { text: ",\n", color: theme.colors.slate[200] },
                    { text: "\tdate", color: theme.colors.indigo[300] },
                    { text: ": ", color: theme.colors.slate[200] },
                    {
                      text: `"${new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}"`,
                      color: theme.colors.rose[300],
                    },
                    { text: "\n}", color: theme.colors.slate[200] },
                  ]}
                />
                <HighlightText
                  fontSize={theme.typography.fontSize.body.lg}
                  lineHeight={theme.typography.lineHeight.body.lg}
                  isBlock
                  segments={[
                    { text: "\nbutton", color: theme.colors.teal[300] },
                    {
                      text: ".addEventListener(",
                      color: theme.colors.slate[200],
                    },
                    { text: "'click'", color: theme.colors.rose[300] },
                    { text: ", () => {\n", color: theme.colors.slate[200] },
                    { text: "\tform", color: theme.colors.orange[300] },
                    { text: ".send(", color: theme.colors.slate[200] },
                    { text: "message", color: theme.colors.teal[300] },
                    { text: ");\n", color: theme.colors.slate[200] },
                    { text: "})", color: theme.colors.slate[200] },
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
