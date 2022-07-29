import React from 'react'
import {styled,Box,Button} from "@mui/material"
const StyledMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
const StyledBurger = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  & div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#EFFFFA' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    & div:first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    & div:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    & div:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">💸</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">📩</span>
        Contact
        </a>
    </StyledMenu>
  )
}
const Burger = ({ open, handleOpen }) => {
  return (
    <StyledBurger open={open} onClick={handleOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
function PopperMenu({open, handleOpen}) {
  return (
    <div>
        <Burger open={open} handleOpen={handleOpen} />
        {/* <Menu open={open} /> */}
    </div>
  )
}

export default PopperMenu