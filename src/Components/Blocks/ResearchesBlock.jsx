import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { RESEARCHERS_LABEL_LIST } from "../../Data/ContentText";
import ButtonResearch from "../Buttons/ButtonResearch";

const positionList = [
  {
    top: "0vh",
    left: "0vw",
  },
  {
    top: "1vh",
    left: "22vw",
  },
  {
    top: "25vh",
    left: "12vw",
  },
  {
    top: "28vh",
    left: "35vw",
  },
  {
    top: "55vh",
    left: "25vw",
  },
];

const ResearchesBlockWrapper = styled(Box)`
  position: relative;
  min-height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  padding-top: 100px;
  overflow: hidden;
  display: flex;
  /* flex-direction:column; */
  /* justify-content:space-between; */
  background-color: white;
`;
const ItemCurrentWrapper = styled(Box)`
  width: 45%;
`;
const ItemListWrapper = styled(Box)`
  position: relative;
  width: 55%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 2rem;
`;
const ListItem = styled(Box)`
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top};
  /* left:35vw; */
  left: ${(props) => props.left};
  border: 5px solid #a8d4af;
  width: 255px;
  height: 255px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(34, 53, 111, 0.3);
  }
`;
const ListItemLabel = styled(Typography)`
  color: #22356f;
  font-size: 26px;
  opacity:0.8;
  font-weight: 500;
  width: 100%;
  text-align: center;
`;
const CurrentItemContent = styled(Box)`
  height:100%;
  display: flex;
  flex-direction:column;
  gap:40px;
  padding-left:48px;
  justify-content:flex-end;
`;
const CurrentLabel = styled(Typography)`
  color: #22356f;
  font-size: 36px;
  font-weight: 600;
  text-transform:uppercase;
`;
const CurrentTextBlock = styled(Box)`
height:320px;
`;
const CurrentText = styled(Typography)`
  color: #22356f;
  font-weight: 500;
  font-size: 24px;
  line-height: 135.5%;
`;
function ResearchesBlock() {
  const [currentItem, setCurrentItem] = useState(RESEARCHERS_LABEL_LIST[0]);
  const handleClick = (e) => {
    setCurrentItem(RESEARCHERS_LABEL_LIST[e.currentTarget.id])
  };
  return (
    <ResearchesBlockWrapper id="research">
      <ItemCurrentWrapper>
        {currentItem && (
          <CurrentItemContent>
            <CurrentLabel >{currentItem.label}</CurrentLabel>
            <CurrentTextBlock ><CurrentText paragraph>{currentItem.text}</CurrentText><CurrentText>{currentItem.text}</CurrentText></CurrentTextBlock>
            <Box><ButtonResearch/></Box>
          </CurrentItemContent>
        )}
      </ItemCurrentWrapper>
      <ItemListWrapper>
        {RESEARCHERS_LABEL_LIST.map((el, ind) => {
          return (
            <ListItem
              id={ind}
              left={positionList[ind].left}
              top={positionList[ind].top}
              onClick={handleClick}
            >
              <ListItemLabel>{el.label}</ListItemLabel>
            </ListItem>
          );
        })}
      </ItemListWrapper>
    </ResearchesBlockWrapper>
  );
}

export default ResearchesBlock;
