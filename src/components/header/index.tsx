import { useState, useEffect } from "react";
import { Text } from "../text";
import {
  MainContainer,
  HeaderTopBar,
  HamburgerIcon,
  MobileMenuContent,
  MobileMenuItem,
} from "./styled";
import { PageName } from "../../types";
import { useLocation, useNavigate } from "react-router";
import { theme } from "../../global/theme";
import { Footer } from "../footer";

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const getSelectedPage = (path: string): PageName => {
    switch (path) {
      case "/":
        return PageName.Hello;
      case "/about":
        return PageName.AboutMe;
      case "/projects":
        return PageName.Projects;
      case "/contact":
        return PageName.ContactMe;
      default:
        return PageName.Hello;
    }
  };

  const goToPage = (page: PageName) => {
    navigate(
      page === PageName.Hello
        ? "/"
        : page === PageName.AboutMe
        ? "/about"
        : page === PageName.Projects
        ? "/projects"
        : page === PageName.ContactMe
        ? "/contact"
        : "/"
    );
    setIsMenuOpen(false);
  };

  const selectedPageString = getSelectedPage(currentPath);

  return (
    <MainContainer selectedPage={selectedPageString} isMenuOpen={isMenuOpen}>
      <HeaderTopBar selectedPage={selectedPageString} isMenuOpen={isMenuOpen}>
        <div id="first-block">
          <Text zIndex={13}>Bruno Siqueira</Text>
        </div>
        <div id="second-block" onClick={() => goToPage(PageName.Hello)}>
          <Text zIndex={13}>_hello</Text>
        </div>
        <div id="third-block" onClick={() => goToPage(PageName.AboutMe)}>
          <Text zIndex={13}>_about-me</Text>
        </div>
        <div id="fourth-block" onClick={() => goToPage(PageName.Projects)}>
          <Text zIndex={13}>_projects</Text>
        </div>
        <div id="fifth-block"></div>
        <div id="sixty-block" onClick={() => goToPage(PageName.ContactMe)}>
          <Text zIndex={13}>_contact-me</Text>
        </div>
        <HamburgerIcon
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          isMenuOpen={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
      </HeaderTopBar>
      <MobileMenuContent isMenuOpen={isMenuOpen}>
        <span>
          <MobileMenuItem
            selectedPage={selectedPageString}
            isMenuOpen={isMenuOpen}
            onClick={() => {}}
            disabled
          >
            <Text fontSize={theme.typography.fontSize.body.lg}>
              # navigate:
            </Text>
          </MobileMenuItem>
          <MobileMenuItem
            selectedPage={selectedPageString}
            isMenuOpen={isMenuOpen}
            onClick={() => goToPage(PageName.Hello)}
          >
            _hello
          </MobileMenuItem>
          <MobileMenuItem
            selectedPage={selectedPageString}
            isMenuOpen={isMenuOpen}
            onClick={() => goToPage(PageName.AboutMe)}
          >
            _about-me
          </MobileMenuItem>
          <MobileMenuItem
            selectedPage={selectedPageString}
            isMenuOpen={isMenuOpen}
            onClick={() => goToPage(PageName.Projects)}
          >
            _projects
          </MobileMenuItem>
          <MobileMenuItem
            selectedPage={selectedPageString}
            isMenuOpen={isMenuOpen}
            onClick={() => goToPage(PageName.ContactMe)}
          >
            _contact-me
          </MobileMenuItem>
        </span>
        <Footer />
      </MobileMenuContent>
    </MainContainer>
  );
};
