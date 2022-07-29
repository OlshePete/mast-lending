import { Box, Typography, Grid, styled, Grow, Collapse } from "@mui/material";
import React, { useEffect, useState } from "react";
import GeralMastIcon from "../Icons/GeralMastIcon";
import useWindowPosition from "../../Hooks/useWindowPosition";

const StartBlockWrapper = styled(Grid)`
  /* min-width: calc(100% - 200px); */
  /* max-width: calc(100% - 200px); */
  /* min-height: 100vh; */
  /* background-image: "url(../../Images/screen_background1.svg)"; */
  display: flex;
  flex-direction: column;
  gap: 80px;
  /* padding-top:100px; */
  /* padding-left:100px; */
  /* flex-wrap:wrap; */
`;
const CustomGrid = styled(Grid)`
  width: 100%;
  padding-left: 100px;
  display: flex;
  justify-content: flex-start;
`;
const IntroText = styled(Typography)`
  max-width: 850px;
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 135.5%;
`;
function StartBlock() {
  const [checkedLogo, setCheckedLogo] = useState(false);
  const [checkedText, setCheckedText] = useState(false);
  useEffect(() => {
    setCheckedLogo(true);
  }, []);

  // const checkedLogo = useWindowPosition("start-block")
  return (
    <StartBlockWrapper container id="start">
      <Collapse
        in={checkedLogo}
        {...(checkedLogo ? { timeout: 500 } : {})}
        // collapsedSize={50}
        addEndListener={()=> setTimeout(() => setCheckedText(true), 300)}
      >
        <CustomGrid item xs={12} sm={12} md={10} xl={10}>
          <GeralMastIcon />
        </CustomGrid>
        {/*  */}
      </Collapse>
      <Collapse
        in={checkedText}
        {...(checkedText ? { timeout: 500 } : {})}
        // collapsedSize={10}
        // addEndListener={()=> console.log("end")}
      ><CustomGrid item xs={12} sm={12} md={10} xl={10}>
        <IntroText
            component="span"
        >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque{" "}

        </IntroText>
      </CustomGrid>

      </Collapse>
      {/* <Grow in={checked}>
        
        </Grow> */}
      {/* <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          
        >
        </Grow> */}
    </StartBlockWrapper>
  );
}

export default StartBlock;
