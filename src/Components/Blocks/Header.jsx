import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import HeaderMastIcon from "../Icons/HeaderMastIcon";
import MainNavigateMenu from "../Menus/MainNavigateMenu";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomAppBar = styled(AppBar)`
  background: none;
`;
const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-start;
`;
const SectionLabel = styled(Typography)`
  padding-left: 2rem;
  padding-top: 1rem;
  font-size: 24px;
  text-transform: uppercase;
  color:${props=>!props.iswhite?"#fff":"#22356f"};
  letter-spacing: -0.006em;
  line-height: 78.66%;
`;

function Header() {
  const currentSection = useSelector((state) => state.mast.currentSection);
  const logoVision = currentSection !== "start";
  const isWhite =
    currentSection === "research" || currentSection === "direction";
  const HEADER_SECTIONS_LABEL_LIST = [
    {
      sectionID: "development",
      sectionLabel: "Разработка",
    },
    {
      sectionID: "research",
      sectionLabel: "Исследования",
    },
    {
      sectionID: "education",
      sectionLabel: "Обучение",
    },
  ];
  const [open, setOpen] = useState(false);
  const [sectionLabel, setSectionLabel] = useState(null);
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const find = HEADER_SECTIONS_LABEL_LIST.find(
      (item) => item.sectionID === currentSection
    );
    if (find) {
      setSectionLabel(find.sectionLabel);
    } else {
      setSectionLabel(null);
    }
  }, [currentSection]);
  console.log(isWhite);

  return (
    <CustomAppBar elevation={0}>
      <CustomToolbar>
        {logoVision && <HeaderMastIcon isWhite={isWhite}/>}
        {currentSection && <SectionLabel iswhite={isWhite} >{sectionLabel}</SectionLabel>}
        <MainNavigateMenu open={open} handleOpen={handleOpen} isWhite={isWhite}/>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Header;
