import React, { useContext, useEffect, useState, useCallback } from "react";
import { FaClock, FaUsers, FaCodeBranch } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterContent,
  LogoSection,
  Logo,
  Section,
  VisitorsSection,
  Title,
  Text,
  LinksList,
  LinkItem,
  FooterStripContainer,
  FooterStrip,
  StripText,
  FooterSection,
} from "./Footer.styles";
import logo2 from '../../assets/logo2.png';
import { FontSizeContext } from "../../context/FontSizeProvider";
import { LanguageContext } from "../../context/LanguageContext";
import { GetTotalVisitorApi, RegisterVisitorApi } from "../../services/viewsapi/ViewsApi";

const translations = {
  English: {
    disclaimerTitle: "Disclaimer :",
    disclaimerText: "This website is managed by the Karnataka State Government's Directorate of Information and Public Relations (DIPR). Please note that this page provides links to the websites/web pages of various Government Ministries, Departments, and Organizations of Karnataka.",
    websitePoliciesTitle: "Website Policies",
    copyrightPolicy: "Copyright Policy",
    hyperlinkingPolicy: "Hyperlinking Policy",
    securityPolicy: "Security Policy",
    guidelines: "Guidelines",
    termsAndConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",
    help: "Help",
    visitorsTitle: "Visitors",
    lastUpdated: "Last Updated: 18-01-2025 11:33 AM",
    visitorsCounter: "Visitors Counter: ",
    version: "Version: C64/KBN 1.3",
    footerStripText: "Designed, Developed and Hosted by: Digi9 - Web Portal, Government of Karnataka © 2025, All Rights Reserved.",
  },
  Hindi: {
    disclaimerTitle: "अस्वीकरण :",
    disclaimerText: "यह वेबसाइट कर्नाटक राज्य सरकार के सूचना और जनसंपर्क निदेशालय (डीआईपीआर) द्वारा प्रबंधित की जाती है। कृपया ध्यान दें कि यह पृष्ठ कर्नाटक के विभिन्न सरकारी मंत्रालयों, विभागों और संगठनों की वेबसाइटों/वेब पृष्ठों के लिंक प्रदान करता है।",
    websitePoliciesTitle: "वेबसाइट नीतियां",
    copyrightPolicy: "कॉपीराइट नीति",
    hyperlinkingPolicy: "हाइपरलिंकिंग नीति",
    securityPolicy: "सुरक्षा नीति",
    guidelines: "दिशानिर्देश",
    termsAndConditions: "नियम और शर्तें",
    privacyPolicy: "गोपनीयता नीति",
    help: "सहायता",
    visitorsTitle: "आगंतुक",
    lastUpdated: "अंतिम अद्यतन: 18-01-2025 11:33 AM",
    visitorsCounter: "आगंतुक गणक: ",
    version: "संस्करण: C64/KBN 1.3",
    footerStripText: "डिज़ाइन, विकसित और होस्ट किया गया: ई-गवर्नेंस केंद्र - वेब पोर्टल, कर्नाटक सरकार © 2025, सर्वाधिकार सुरक्षित।",
  },
  Kannada: {
    disclaimerTitle: "ದೂರವಾಣಿ :",
    disclaimerText: "ಈ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸರ್ಕಾರದ ಮಾಹಿತಿ ಮತ್ತು ಜನಸಂಪರ್ಕ ನಿರ್ದೇಶನಾಲಯ (ಡಿಐಪಿಆರ್) ನಿರ್ವಹಿಸುತ್ತದೆ. ದಯವಿಟ್ಟು ಗಮನಿಸಿ: ಈ ಪುಟವು ಕರ್ನಾಟಕದ ವಿವಿಧ ಸರ್ಕಾರಿ ಸಚಿವಾಲಯಗಳು, ವಿಭಾಗಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳ ವೆಬ್‌ಸೈಟ್/ವೆಬ್ ಪುಟಗಳಿಗೆ ಲಿಂಕ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    websitePoliciesTitle: "ವೆಬ್‌ಸೈಟ್ ನೀತಿಗಳು",
    copyrightPolicy: "ಕೃತಿಸ್ವಾಮ್ಯ ನೀತಿ",
    hyperlinkingPolicy: "ಹೈಪರ್‌ಲಿಂಕಿಂಗ್ ನೀತಿ",
    securityPolicy: "ಸುರಕ್ಷತಾ ನೀತಿ",
    guidelines: "ಮಾರ್ಗದರ್ಶನಗಳು",
    termsAndConditions: "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
    privacyPolicy: "ಗೌಪ್ಯತಾ ನೀತಿ",
    help: "ಸಹಾಯ",
    visitorsTitle: "ಭೇಟಿಕಾರರು",
    lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ: 18-01-2025 11:33 AM",
    visitorsCounter: "ಭೇಟಿಕಾರರ ಗಣಕ: ",
    version: "ಆವೃತ್ತಿ: C64/KBN 1.3",
    footerStripText: "ವಿನ್ಯಾಸಗೊಳಿಸಿದ, ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ಮತ್ತು ಹೋಸ್ಟ್ ಮಾಡಿದವರು: ಇ-ಗವರ್ನೆನ್ಸ್ ಸೆಂಟರ್ - ವೆಬ್ ಪೋರ್ಟಲ್, ಕರ್ನಾಟಕ ಸರ್ಕಾರ © 2025, ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  },
};

const Footer = () => {
  const { fontSize } = useContext(FontSizeContext);
  const { language } = useContext(LanguageContext);
  const [visitorData, setVisitorData] = useState({ lastUpdated: "", totalVisitors: 0 });
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const t = translations[language] || translations.English;

  const fetchVisitorData = useCallback(async () => {
    try {
      const isVisited = sessionStorage.getItem("isVisited");
      if (!isVisited) {
        await RegisterVisitorApi();
        sessionStorage.setItem("isVisited", "true");
      }
      const totalVisitorsResponse = await GetTotalVisitorApi();
      setVisitorData({ 
        lastUpdated: new Date().toLocaleString(), 
        totalVisitors: totalVisitorsResponse.totalVisits 
      });
    } catch (error) {
      console.error("Error fetching visitor data:", error);
    }
  }, []);

  useEffect(() => {
    fetchVisitorData();
    
    // Update time every minute instead of every second for better performance
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 60000);
    
    return () => clearInterval(intervalId);
  }, [fetchVisitorData]);

  const fontSizeStyle = { fontSize: `${fontSize}%` };

  return (
    <FooterContainer style={fontSizeStyle}>
      <FooterSection>
        <FooterContent style={fontSizeStyle}>
          <LogoSection>
            <Logo src={logo2} alt="Government Logo" />
          </LogoSection>
          <Section style={fontSizeStyle}>
            <Title style={fontSizeStyle}>{t.disclaimerTitle}</Title>
            <Text style={fontSizeStyle}>{t.disclaimerText}</Text>
          </Section>
          <Section style={fontSizeStyle}>
            <Title style={fontSizeStyle}>{t.websitePoliciesTitle}</Title>
            <LinksList>
              {[
                { path: "/copyright-policy", text: t.copyrightPolicy },
                { path: "/hyperlinking-policy", text: t.hyperlinkingPolicy },
                { path: "/security-policy", text: t.securityPolicy },
                { path: "/guidelines", text: t.guidelines },
                { path: "/terms-and-conditions", text: t.termsAndConditions },
                { path: "/privacy-policy", text: t.privacyPolicy },
                { path: "/help", text: t.help },
              ].map((link, index) => (
                <LinkItem key={index} style={fontSizeStyle}>
                  <IoIosArrowDroprightCircle />
                  <Link style={{ color: 'inherit', ...fontSizeStyle }} to={link.path}>
                    {link.text}
                  </Link>
                </LinkItem>
              ))}
            </LinksList>
          </Section>
          <VisitorsSection style={fontSizeStyle}>
            <Title style={fontSizeStyle}>{t.visitorsTitle}</Title>
            <Text style={fontSizeStyle}>
              <FaClock /> {currentTime}
            </Text>
            <Text style={fontSizeStyle}>
              <FaUsers /> {t.visitorsCounter}{visitorData.totalVisitors}
            </Text>
            <Text style={fontSizeStyle}>
              <FaCodeBranch /> {t.version}
            </Text>
          </VisitorsSection>
        </FooterContent>
      </FooterSection>
      <FooterStripContainer style={fontSizeStyle}>
        <FooterStrip>
          <StripText style={fontSizeStyle}>{t.footerStripText}</StripText>
        </FooterStrip>
      </FooterStripContainer>
    </FooterContainer>
  );
};

export default Footer;
