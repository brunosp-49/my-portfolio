import React, { useState, useCallback } from "react";
import { theme } from "../../global/theme";
import { FolderIcon } from "./components/icons/folderIcon";
import { FileIcon } from "./components/icons/fileIcon";
import {
  AccordionContainer,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionItemWrapper,
  AccordionTitleContainer,
} from "./styled";
import { ArrowIcon } from "./components/icons/arrowIcon";
interface AccordionItemData {
  title: string;
  content?: React.ReactNode;
  children?: AccordionItemData[];
  componentToShow?: React.ReactNode;
  onClick?: () => void;
}
interface AccordionProps {
  items: AccordionItemData[];
  allowMultipleOpen?: boolean;
  level?: number;
}
export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultipleOpen = false,
  level = 0,
}) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const handleItemClick = useCallback(
    (index: number) => {
      if (allowMultipleOpen) {
        setOpenItems((prevOpenItems) => {
          const newSet = new Set(prevOpenItems);
          if (newSet.has(index)) {
            newSet.delete(index);
          } else {
            newSet.add(index);
          }
          return newSet;
        });
      } else {
        setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
      }
    },
    [allowMultipleOpen]
  );
  const topLevelFolderColors = [
    theme.colors.orange[300],
    theme.colors.teal[300],
    theme.colors.indigo[300],
    theme.colors.purple[300],
    theme.colors.rose[300],
    theme.colors.yellow[300],
  ];
  const getFolderColor = useCallback(
    (currentLevel: number, itemIndex: number) => {
      if (currentLevel === 0) {
        return topLevelFolderColors[itemIndex % topLevelFolderColors.length];
      } else {
        switch (itemIndex) {
          case 0:
            return theme.colors.rose[400];
          case 1:
            return theme.colors.teal[300];
          case 2:
            return theme.colors.indigo[500];
          case 3:
            return theme.colors.yellow[400];
          case 4:
            return theme.colors.purple[400];
          default:
            break;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme.colors, topLevelFolderColors]
  );
  return (
    <AccordionContainer>
      {items.map((item, index) => {
        const isExpandable = Boolean(
          (item.children && item.children.length > 0) ||
            (item.content && !item.componentToShow) ||
            item.componentToShow
        );
        const isDisplayOnly = !!item.componentToShow;
        const isOpen =
          isDisplayOnly ||
          (allowMultipleOpen ? openItems.has(index) : openItemIndex === index);
        const shouldRenderFolderIcon = level === 1;
        const shouldRenderFileIcon = level >= 2;
        const handleClick = () =>
          item.onClick ? item.onClick() : handleItemClick(index);
        const folderIconColor = getFolderColor(level, index);
        return (
          <AccordionItemWrapper
            key={index}
            level={level}
            isExpandable={isExpandable}
          >
            <AccordionHeader
              isOpen={isOpen}
              level={level}
              onClick={handleClick}
              isClickable={true}
            >
              <AccordionTitleContainer level={level}>
                {!shouldRenderFileIcon && <ArrowIcon isOpened={isOpen} />}
                {shouldRenderFolderIcon && (
                  <FolderIcon size={20} color={folderIconColor} />
                )}
                {shouldRenderFileIcon && (
                  <FileIcon size={20} color={theme.colors.slate[400]} />
                )}
                {item.title}
              </AccordionTitleContainer>
            </AccordionHeader>
            <AccordionContent isOpen={isOpen}>
              {isDisplayOnly ? (
                item.componentToShow
              ) : (
                <>
                  {item.content &&
                    (typeof item.content === "string" ? (
                      <AccordionContentText>
                        {item.content}
                      </AccordionContentText>
                    ) : (
                      item.content
                    ))}
                  {isExpandable && (
                    <Accordion
                      items={item.children || []}
                      allowMultipleOpen={allowMultipleOpen}
                      level={level + 1}
                    />
                  )}
                </>
              )}
            </AccordionContent>
          </AccordionItemWrapper>
        );
      })}
    </AccordionContainer>
  );
};
