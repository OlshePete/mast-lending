import React from "react";
import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Blocks/Header";
import MainContentWrapper from "./Components/Wrappers/MainContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullPageWrapper from "./Components/FullPageWrapper/FullPageWrapper";

const MainWrapper = styled(Box)`
  background: linear-gradient(rgba(75,75,75, 0), rgba(75,75,75, 0)),linear-gradient(#22356f, #22356f),url("/src/Images/background-noise.png") center/cover;
  min-height: 100vh;
  width: 100vw;
`;

function App() {
  const [logoVision, setLogoVision] = useState(false);

  const handleScroll = (event) => {
    if (window.pageYOffset < 600) {
      setLogoVision(false);
    }
    if (window.pageYOffset > 600 && !logoVision) {
      setLogoVision(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainWrapper>
                <FullPageWrapper/>
                {/* <Header logoVision={logoVision} />
                <MainContentWrapper /> */}
              </MainWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
