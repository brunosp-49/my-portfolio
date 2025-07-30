import { Text } from "../text";
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
      <div id="second-block" onClick={() => {}}>
        <XIcon size={25} />
      </div>
      <div id="third-block" onClick={() => {}}>
        <LinkedInIcon size={25} />
      </div>
      <div id="fifth-block"></div>
      <div id="fourth-block" onClick={() => {}}>
        <Text>@brunosp-49</Text>
        <GitHubIcon size={25} />
      </div>
    </MainContainer>
  );
};
