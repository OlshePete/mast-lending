import { Box, CardMedia, styled, Typography } from "@mui/material";
import React from "react";
import ContactMastTextIcon from "../Icons/ContactMastTextIcon";
import TeamImageBlock from "./TeamImageBlock";

const ContactBlockWrapper = styled(Box)`
position:relative;
  min-height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  padding-top:100px;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;
const CustomLabel = styled(Typography)`
  color: white;
  font-size: 62px;
  text-align: center;
  font-weight:500;
`;
const ContactContentWrapper = styled(Box)`
  flex-grow:1;
  max-height:600px;
  display:flex;
  padding-right:45px;

`;
const ContactBox = styled(Box)`
  max-width:550px;
  min-width:350px;
  color:white;
  text-align:right;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
`;
const CustomContactLabel = styled(Typography)`
  font-size: 26px;
  opacity:0.6;
`;
const CustomContactText = styled(Typography)`
  font-size: 32px;
`;
const ImageBox = styled(Box)`
  flex-grow:1;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  overflow: hidden;
  z-index:10;

`;

function ContactBlock() {
  const CONTACT_FIELD_LIST =[
    {
      label:'Адрес:',
      text:'г. Санкт-Петербург, ул. Шпалерная д.1'
    },
    {
      label:'Телефон:',
      text:'+7 (812)-354-0534'
    },
    {
      label:'email:',
      text:'mast@euspb.ru'
    },
  ]
  return (
    <ContactBlockWrapper
    id="contact"
    >
      <Box
        sx={{
          backgroundColor:'white',
          position:'absolute',
          width:'1275px',
          height:'1275px',
          // maxWidth:'1275px',
          // maxHeigth:'1275px',
          bottom:"-638px",
          borderRadius:'50%',
          left:"-280px",
          zIndex:9,
        }}
      >
      </Box>
      <CustomLabel>Наша команда</CustomLabel>
      <ContactContentWrapper>
        <ImageBox>
          <ContactMastTextIcon/>
          <TeamImageBlock/>
        </ImageBox>
        <ContactBox>
          {
            CONTACT_FIELD_LIST.map(elem=>{
              return(
                <Box key={elem.label}>
                  <CustomContactLabel>{elem.label}</CustomContactLabel>
                  <CustomContactText>{elem.text}</CustomContactText>
                </Box>
              )
            })
          }
          
        </ContactBox>
      </ContactContentWrapper>
    </ContactBlockWrapper>
  );
}

export default ContactBlock;
