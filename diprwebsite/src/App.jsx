import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/Theme";
import Login from "./screens/Login/Login";
import Otp from "./screens/otp/Otp";
import Signup from "./screens/SignUp/SignUp";
import Applayout from "./Applayout/Applayout";
import Home from "./modules/pages/Home/Home";
import LatestNews from "./modules/pages/Latestnews/LatestNews";
import MagaZinepages from "./modules/pages/magazinepage/MagaZinepage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Home />} />
            <Route path="/latestnews" element={<LatestNews />} />
            <Route path="/magazinepages" element={<MagaZinepages />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
