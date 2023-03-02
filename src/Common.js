// import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Head from "./components/Head";
import SideBar from "./components/SideBar";
import Main from "./pages/main";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

const Text = styled.div`
  display: flex;
`;

const Nav = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  margin-left: 15vh;
`;

function Common() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Text>
          <SideBar />
          <Nav>
            <Routes>
              <Route path="/1" element={<Page1 />} />
              <Route path="/2" element={<Page2 />} />
              <Route path="/3" element={<Page3 />} />
              <Route path="/" element={<Main />} />
            </Routes>
          </Nav>
        </Text>
      </BrowserRouter>
    </>
  );
}

export default Common;
