import { Typography, styled, Box, Button, CardMedia } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import nextIcon from "../../Images/next-slide-icon.png";
import prevIcon from "../../Images/prev-slide-icon.png";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import {
  DEVELOMPMENT_BLOCK_PROJECT_LIST,
  DEVELOMPMENT_BLOCK_TEXT_LIST,
} from "../../Data/ContentText";
import ButtonReadMore from "../Buttons/ButtonReadMore";
const BlockWrapper = styled(Box)`
  height: 100%;
  overflow: visible;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const LabelWrapper = styled(Typography)`
  text-align: center;
  padding-bottom: 50px;
`;
const TextWrapper = styled(Typography)`
  padding: 100px;
`;
function DevelomentBlockContent({ label, text }) {
  return (
    <>
      <LabelWrapper variant="h1" color={"white"}>
        {label}
      </LabelWrapper>
      <TextWrapper variant="h4" color={"white"}>
        {text}
      </TextWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          p: "100px",
        }}
      >
        <ButtonReadMore />
      </Box>
    </>
  );
}
function DevelomentBlock() {
  return (
    <BlockWrapper
    id="development"
    >
      <Carousel
        height="70vh"
        interval="7000"
        fullHeightHover={false}
        NextIcon={
          <CardMedia
            src={nextIcon}
            component="img"
            height="100"
            sx={{}}
            id="nextone"
          />
        }
        PrevIcon={<CardMedia src={prevIcon} component="img" height="100" />}
        navButtonsProps={{
          style: {
            backgroundColor: "rgba(0,0,0,0)",
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
        }}
        indicators={true}
        navButtonsAlwaysVisible={true}
        IndicatorIcon={<Brightness1Icon />}
        indicatorIconButtonProps={{
          style: {
            padding: "10px",
            color: "#D9D9D9",
            opacity: 0.6,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#FFF",
            opacity: 1,
          },
        }}
      >
        {DEVELOMPMENT_BLOCK_PROJECT_LIST.map((el, ind) => {
          return (
            <DevelomentBlockContent
              key={"slide" + el + ind}
              label={el}
              text={DEVELOMPMENT_BLOCK_TEXT_LIST[ind]}
            />
          );
        })}
      </Carousel>
    </BlockWrapper>
  );
}
export default DevelomentBlock;
