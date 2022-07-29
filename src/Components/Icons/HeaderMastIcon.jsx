import React from 'react'
import { CardMedia, styled } from '@mui/material';
import Mastlogo from "../../Images/mast-header-logo.png";
import MastlogoDark from "../../Images/mast-header-logo-dark.png";


const CustomizedHeaderIcon = styled(CardMedia)`
  object-fit:contain;
  max-height:100px;
  width:180px;
  margin-left:2rem;
  cursor: pointer;
  /* flex-grow:1; */
`;
function HeaderMastIcon({isWhite}) {
  const handleClick = () => {
    window.scrollTo(0,0)
  }
  return (
    <CustomizedHeaderIcon
        onClick={handleClick}
        component="img"
        height="100"
        image={isWhite?MastlogoDark:Mastlogo}
        alt="mast-logo"
    />
  )
}

export default HeaderMastIcon