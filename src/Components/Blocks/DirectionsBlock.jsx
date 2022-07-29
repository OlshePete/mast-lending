import React, { useState } from "react";
import { Typography, Box, styled, Tabs, Tab, Divider } from "@mui/material";
import { DIRECTIONS_BLOCK_TEXT_LIST } from "../../Data/ContentText";

const DirectionsBlockWrapper = styled(Box)`
  background-color: white;
  min-height:100vh;
  & .MuiTabs-indicator {
    display:none;
  }
  & .MuiTabs-flexContainer {
    gap:2rem;
    margin-bottom:2rem;
  }
`;
const CustomTab = styled(Tab)`
border:10px solid ${prop=>prop.color};
  /* background-color: ; */
  height:400px;
  width:400px;
  border-radius:100%;
  color:#22356F;
  font-size:32px;
  text-transform:uppercase;
  font-weight:600;
`;
function DirectionsBlock() {
  const tabsColor = [
    "#4A484F",
    "#22356F",
    "#A8D4AF",
  ]
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <DirectionsBlockWrapper id="direction">
      <Tabs value={value} onChange={handleChange} centered >
        <CustomTab label="Исследования" color={tabsColor[0]}></CustomTab>
        <CustomTab label="Разработка" color={tabsColor[1]} ></CustomTab>
        <CustomTab label="Обучение" color={tabsColor[2]} ></CustomTab>
      </Tabs>
      
      <Typography variant="h3" color={"#22356F"}>
      {DIRECTIONS_BLOCK_TEXT_LIST[value]}
      </Typography>
    </DirectionsBlockWrapper>
  );
}

export default DirectionsBlock;
