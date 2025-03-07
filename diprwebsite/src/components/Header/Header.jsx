import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  LogoSection,
  Logo,
  TitleSection,
  Title,
  Subtitle,
  CMSection,
  CMImage,
} from './Header.styles';
import logo2 from '../../assets/logo2.png';
import cm from '../../assets/cm.png';
import { FontSizeContext } from '../../context/FontSizeProvider';

const Header = () => {
  const { fontSize } = useContext(FontSizeContext);
  return (
    <HeaderContainer>
      <LogoSection style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        <Link to="/">
          <Logo src={logo2} alt="Government of Karnataka Logo" />
        </Link>
        <TitleSection style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
        <Subtitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
          Karnataka Varthe
          </Subtitle>
          <Title style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            Department of Information and Public Relations
          </Title>
          <Subtitle style={fontSize !== 100 ? { fontSize: `${fontSize}%` } : undefined}>
            Government of Karnataka
          </Subtitle>
        </TitleSection>
      </LogoSection>
      <CMSection>
        <CMImage src={cm} alt="CM Siddaramaiah" />
      </CMSection>
    </HeaderContainer>
  );
};

export default Header;
