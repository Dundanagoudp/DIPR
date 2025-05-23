import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/Theme";
import Login from "./screens/Login/Login";
import Otp from "./screens/otp/Otp";
import Signup from "./screens/signuppage/SignUp";
import Applayout from "./Applayout/Applayout";
import Home from "./modules/pages/Home/Home";
import LatestNews from "./modules/pages/Latestnews/LatestNews";
import MagaZinepages from "./modules/pages/magazinepage/MagaZinepage";
import AboutUspage from "./modules/pages/aboutuspage/AboutUspage";
import Exclusive from "./modules/pages/exclusivepage/Exclusive";
import ContactUs from "./modules/pages/ContactUspage/ContactUs";
import CopyrightPolicy from "./components/WebsitePolicies/CopyrightPolicy/CopyrightPolicy";
import HyperlinkingPolicy from "./components/WebsitePolicies/HyperlinkingPolicy/HyperlinkingPolicy";
import SecurityPolicy from "./components/WebsitePolicies/SecurityPolicy/SecurityPolicy";
import Guidelines from "./components/WebsitePolicies/Guidelines/Guidelines";
import TermsAndConditions from "./components/WebsitePolicies/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./components/WebsitePolicies/PrivacyPolicy/PrivacyPolicy";
import Help from "./components/WebsitePolicies/Help/Help";
import LatestData from "./modules/pages/Latest/LatestData";
import Profile from "./components/Profile/Profile";
import FontSizeProvider from "./context/FontSizeProvider";
import Signupnumber from "./screens/signuppage/SignUpNumber";
import { LanguageProvider } from "./context/LanguageContext";
import Cookies from "js-cookie";
import { endSession } from "./services/LoginApi"; 
import Gallery from "./modules/pages/dynamicGallery/Gallery";


const App = () => {
  useEffect(() => {
    // Get the userId from cookies
    const userId = Cookies.get("userId");
    
    // Function to call the endSession API
    const handleBeforeUnload = async () => {
      if (userId) {
        try {
          const response = await endSession(userId, "web"); 
          console.log("Session End API Response:", response); 
          if (response.success) {
            console.log("Session ended successfully.");
          } else {
            console.error("Failed to end session:", response.message);
          }
        } catch (err) {
          console.error("Error ending session:", err);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <FontSizeProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/" element={<Applayout />}>
                <Route index element={<Home />} />
                <Route path="/news/:id" element={<LatestNews />} />
                <Route path="/magazinepages" element={<MagaZinepages />} />
                <Route path="/Gallery" element={<Exclusive />} />
                <Route path="/aboutuspage" element={<AboutUspage />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/latestnews" element={<LatestData />} />
                <Route path="/copyright-policy" element={<CopyrightPolicy />} />
                <Route path="/hyperlinking-policy" element={<HyperlinkingPolicy />} />
                <Route path="/security-policy" element={<SecurityPolicy />} />
                <Route path="/guidelines" element={<Guidelines />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/help" element={<Help />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/gallerysection" element={<Gallery />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signupnumber" element={<Signupnumber />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </LanguageProvider>
    </FontSizeProvider>
  );
};

export default App;