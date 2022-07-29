import React from "react";
import {
  Box,
  styled,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuButton from "../Buttons/MenuButton";
import { useDispatch } from "react-redux";
import { setCurrentSection } from "../../reducers/appReducer";
 const MenuDrawer = styled(Drawer)`
  `;
  const DrawerContent = styled(Box)`
    min-width: 300px;
  `;
  const CustomList = styled(List)`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  `;
  const CustomItem = styled(ListItem)``;
  const CustomItemText = styled(Button)`
    width:100%;
    font-size:1.8rem;
  `;
 const idList = [
  "start",
  "development",
  "research",
  "education",
  "contact",
 ]
 const labelList = [
  "Начало",
  "Разработка",
  "Исследования",
  "Обучение",
  "Контакты",
 ]
 const countList = [
  0,
  2,
  3,
  4,
  5
 ]
function MainNavigateMenu({ open, handleOpen, isWhite }) {
  const dispatch = useDispatch();
  return (
    <Box>
      <MenuButton handleOpen={handleOpen} isWhite={isWhite}/>
      <MenuDrawer anchor={"right"} open={open} onClose={handleOpen}>
        <DrawerContent>
          <CustomList>
            {
            labelList.map((element, index) => {
                const handleNavClick = () =>{
                  const transformValue = (0-(window.innerHeight * countList[index]))+"px"
                  document.getElementsByName("Inner")[0].style.transform = `translate3d(0px, ${transformValue}, 0px)`;
                  handleOpen();
                  dispatch(setCurrentSection(idList[index]));
                }
              return (
                <CustomItem key={element + "-" + index}>
                  <CustomItemText type="text" onClick={handleNavClick} className={idList[index]}>{element}</CustomItemText>
                </CustomItem>
              );
            })}
          </CustomList>
        </DrawerContent>
      </MenuDrawer>
    </Box>
  );
}

export default MainNavigateMenu;
