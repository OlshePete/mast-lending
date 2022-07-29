import React from 'react'
import { CardMedia, styled } from '@mui/material';
import TeamImage from "../../Images/test_image.png";


const CustomizedTeamImageBlock = styled(CardMedia)`
    /* object-fit:contain; */
    max-width:800px;
    position:sticky;
    bottom:0;
    left:0;
`;
function TeamImageBlock() {
  return (
    <CustomizedTeamImageBlock
    id="start-logo"
        component="img"
        height="343"
        image={TeamImage}
        alt="mast-logo"
    />
  )
}

export default TeamImageBlock