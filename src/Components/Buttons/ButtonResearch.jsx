import React from 'react'
import { Button, styled } from '@mui/material'
const ButtonWrapper = styled(Button)`
font-size:24px;
color:#A8D4AF;
border:3px solid #A8D4AF;
margin-bottom:2rem;
`;
function ButtonResearch() {
  return (
    <ButtonWrapper>Смотреть сайт</ButtonWrapper>
  )
}

export default ButtonResearch