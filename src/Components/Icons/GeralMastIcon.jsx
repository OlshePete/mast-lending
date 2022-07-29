import React from 'react'
import { CardMedia, styled } from '@mui/material';
import Mastlogo from "../../Images/mast-general-logo.png";


const CustomizedGeneralIcon = styled(CardMedia)`
object-fit:contain;
max-width:700px;
padding-top:100px;
`;
function GeralMastIcon() {
  return (
    <CustomizedGeneralIcon
    id="start-logo"
        component="img"
        height="380"
        image={Mastlogo}
        alt="mast-logo"
    />
  )
}

export default GeralMastIcon