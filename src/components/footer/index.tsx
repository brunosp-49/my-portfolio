import { Link, Text } from "../text";
import { GitHubIcon } from "./components/icons/githubIcon";
import { LinkedInIcon } from "./components/icons/linkedinIcon";
import { XIcon } from "./components/icons/xIcon";
import { MainContainer } from "./styled";

export const Footer = () => {
  return (
    <MainContainer>
      <div id="first-block">
        <Text>Find me in:</Text>
      </div>
      <div id="second-block">
        <XIcon size={25} />
      </div>
      <div id="third-block">
        <Link
          href="https://www.linkedin.com/in/bruno-siqueira-de-paulo/"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <LinkedInIcon size={25} />
        </Link>
      </div>
      <div id="fifth-block"></div>
      <div id="fourth-block">
        <Link
          href="https://github.com/brunosp-49"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
          target="_blank"
        >
          <Text>@brunosp-49</Text>
          <GitHubIcon size={25} />
        </Link>
      </div>
    </MainContainer>
  );
};
