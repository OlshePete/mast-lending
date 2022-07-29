import React from 'react'
import { CardMedia, styled } from '@mui/material';
import MastlogoText from "../../Images/mast-logo-text-dark.png";


const CustomizedContactMastText = styled(CardMedia)`
object-fit:contain;
max-width:560px;
padding-top:60px;
padding-left:100px;
`;
function ContactMastTextIcon() {
  return (
    <CustomizedContactMastText
    id="start-logo"
        component="img"
        height="180"
        image={MastlogoText}
        alt="mast-logo"
    />
  )
}

export default ContactMastTextIcon