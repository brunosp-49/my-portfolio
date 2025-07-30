import React, { useState, useCallback } from "react";
import { Accordion } from "../../components/accordion";
import { AccordionTitleContainer } from "../../components/accordion/styled";
import { Container } from "../../components/container";
import { Divider } from "../../components/divider";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { EmailIcon } from "./components/icons/emailIcon";
import { PhoneIcon } from "./components/icons/phoneIcon";
import {
  Content,
  MenuLeft,
  RightContainer,
  SubContainer,
  TabContainer,
  TabHeaderContainer,
  TabTitle,
  CloseTabButton,
  TabContentArea,
} from "./styled";
import { Text } from "../../components/text";
import type { TabContentData } from "../../types";
import { tabContents } from "./components/tab";

export const About = () => {
  const [openTabs, setOpenTabs] = useState<TabContentData[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const handleFileClick = useCallback(
    (tabId: string) => {
      if (openTabs.some((tab) => tab.id === tabId)) {
        setActiveTabId(tabId);
      } else {
        const content = tabContents[tabId];
        if (content) {
          setOpenTabs((prevTabs) => [...prevTabs, content]);
          setActiveTabId(tabId);
        }
      }
    },
    [openTabs]
  );
  const handleCloseTab = useCallback(
    (tabId: string, event: React.MouseEvent) => {
      event.stopPropagation();
      setOpenTabs((prevTabs) => {
        const newTabs = prevTabs.filter((tab) => tab.id !== tabId);
        if (activeTabId === tabId) {
          if (newTabs.length > 0) {
            setActiveTabId(newTabs[0].id);
          } else {
            setActiveTabId(null);
          }
        }
        return newTabs;
      });
    },
    [activeTabId]
  );
  const activeTabContent = activeTabId ? (
    openTabs.find((tab) => tab.id === activeTabId)?.content
  ) : (
    <Text>
      <pre>
        {`
1    // Choose one of the files from the left menu to view its content.
2    // Then you are going to see infos about me, Bruno Siqueira.`}
      </pre>
    </Text>
  );
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
                  title: "personal-info",
                  children: [
                    {
                      title: "bio",
                      children: [
                        {
                          title: "bio.ts",
                          onClick: () => handleFileClick("bio-index"),
                        },
                      ],
                    },
                    {
                      title: "interests",
                      children: [
                        {
                          title: "interests.ts",
                          onClick: () => handleFileClick("interests-index"),
                        },
                      ],
                    },
                    {
                      title: "education",
                      children: [
                        {
                          title: "education.ts",
                          onClick: () => handleFileClick("education-index"),
                        },
                      ],
                    },
                    {
                      title: "experience",
                      children: [
                        {
                          title: "experience.ts",
                          onClick: () => handleFileClick("experience-index"),
                        },
                      ],
                    },
                  ],
                },
                {
                  title: "contact",
                  componentToShow: (
                    <>
                      <AccordionTitleContainer level={0}>
                        <EmailIcon />
                        <Text>brunospdev@gmail.com</Text> {}
                      </AccordionTitleContainer>
                      <Divider height={"8px"} /> {}
                      <AccordionTitleContainer level={0}>
                        <PhoneIcon />
                        <Text>+55 12 98887-0530</Text> {}
                      </AccordionTitleContainer>
                    </>
                  ),
                },
              ]}
            />
          </MenuLeft>
          <RightContainer>
            <TabHeaderContainer>
              {openTabs.map((tab) => (
                <TabContainer
                  key={tab.id}
                  active={tab.id === activeTabId}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  <TabTitle>{tab.title}</TabTitle>
                  <CloseTabButton onClick={(e) => handleCloseTab(tab.id, e)}>
                    &#x2715;
                  </CloseTabButton>
                </TabContainer>
              ))}
            </TabHeaderContainer>
            <TabContentArea>{activeTabContent}</TabContentArea>
          </RightContainer>
        </Content>
        <Footer />
      </SubContainer>
    </Container>
  );
};
