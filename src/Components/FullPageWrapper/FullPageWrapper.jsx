import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import StartBlock from "../Blocks/StartBlock";
import Header from "../Blocks/Header";
import DirectionsBlock from "../Blocks/DirectionsBlock";
import DevelomentBlock from "../Blocks/DevelomentBlock";
import EducationBlock from "../Blocks/EducationBlock";
import ContactBlock from "../Blocks/ContactBlock";
import ResearchesBlock from "../Blocks/ResearchesBlock";
import { SECTION_ID_LIST } from "../../Data/ContentText";
import { useDispatch } from "react-redux";
import { setCurrentSection } from "../../reducers/appReducer";

const FullPageWrapper = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e);
  }
return (
  <Fullpage onChange={handleChange} id='fullpage-container'>
    <Header />
    <FullPageSections>
      {[
        <StartBlock />,
        <DirectionsBlock />,
        <DevelomentBlock />,
        <ResearchesBlock />,
        <EducationBlock />,
        <ContactBlock />,
      ].map((element, index) => {
        return (
          <FullpageSection
            
            onShow={() => dispatch(setCurrentSection(SECTION_ID_LIST[index]))}
            onHide={() => console.log("false " + SECTION_ID_LIST[index])}
            id={"section-" + SECTION_ID_LIST[index]}
            key={"section" + SECTION_ID_LIST[index] + index}
          >
            {element}
          </FullpageSection>
        );
      })}
    </FullPageSections>
  </Fullpage>
)};

export default FullPageWrapper;
