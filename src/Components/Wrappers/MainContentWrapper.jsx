import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SECTION_ID_LIST } from "../../Data/ContentText";
import ContactBlock from "../Blocks/ContactBlock";
import DevelomentBlock from "../Blocks/DevelomentBlock";
import DirectionsBlock from "../Blocks/DirectionsBlock";
import EducationBlock from "../Blocks/EducationBlock";
import ResearchesBlock from "../Blocks/ResearchesBlock";
import StartBlock from "../Blocks/StartBlock";

const CustomSection = styled(Box)`
  min-height: 100vh;
  max-height: 100vh;
`;
function MainContentWrapper() {
  // const { pathname, hash, key } = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // if not a hash link, scroll to top
  //   if (hash === '') {
  //     window.scrollTo(0, 0);
  //   }
  //   // else scroll to id
  //   else {
  //     setTimeout(() => {
  //       const id = hash.replace('#', '');
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView();
  //       }
  //     }, 0);
  //   }
  // }, [pathname, hash, key]); // do this on route change

 useEffect(() => {
   SECTION_ID_LIST.map(el=>document.getElementById(`section-${el}`)).forEach(section=>sectionObserver.observe(section))
  }, [])
 
const sectionObserver = new IntersectionObserver(
  (entries, observer)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting) {
        console.log(entry.target.id);
        window.location.hash = `#${entry.target.id}`
        // observer.unobserve(entry.target)
      }
    })
  },
  {
    rootMargin:'-300px'
  }
)
// console.log(arr);
  return (
    <div>
      {[
        <StartBlock />,
        <DirectionsBlock />,
        <DevelomentBlock />,
        <ResearchesBlock />,
        <EducationBlock/>,
        <ContactBlock />,
      ].map((element, index) => {
        return <CustomSection id={"section-"+SECTION_ID_LIST[index]} key={"section"+SECTION_ID_LIST[index]+index}>{element}</CustomSection>;
      })}
    </div>
  );
}

export default MainContentWrapper;
