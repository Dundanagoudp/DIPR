import styled from 'styled-components';
import theme from '../../../theme/Theme';

// Title component
export const Title = styled.h1`
  font-size: ${theme.spacing(3)};
  margin-left: ${theme.spacing(2.5)};
  margin-bottom: ${theme.spacing(0.5)};
  text-align: left;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(2.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(3.125)};
  }
`;

// Main container with grid layout
export const Container = styled.div`
  padding: ${theme.spacing(2.5)};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); 
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr; 
    padding: ${theme.spacing(1)};
  }
`;

// Tabs container aligned to the left
export const TabsContainer = styled.div`
  grid-column: 1 / -1; 
  display: flex;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: transparent;
  justify-content: flex-start; // Align tabs to the left

  &::-webkit-scrollbar {
    height: ${theme.spacing(0.5)};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: ${theme.spacing(0.2)};
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }
`;

// Tab button styling
export const Tab = styled.button`
  background: none;
  border: none;
  font-size: ${theme.spacing(2)};
  cursor: pointer;
  color: ${(props) => (props.active ? theme.colors.primary : theme.colors.black)};
  border-bottom: ${(props) => (props.active ? `${theme.spacing(0.375)} solid ${theme.colors.primary}` : "none")};
  padding: ${theme.spacing(1)};
  font-weight: bold;
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.75)};
    padding: ${theme.spacing(0.75)};
  }
`;

// News card styling
export const NewsCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${theme.spacing(1.25)};
  overflow: hidden;
  box-shadow: 0 ${theme.spacing(0.5)} ${theme.spacing(1)} rgba(0, 0, 0, 0.1);
  aspect-ratio: 1 / 1.4;

  @media (max-width: ${theme.breakpoints.mobile}) {
    aspect-ratio: 1 / 1.2;
  }
`;

// News image styling
export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${theme.breakpoints.mobile}) {
    aspect-ratio: 1 / 1.2;
  }
`;

// News content overlay styling
export const NewsContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  color: ${theme.colors.white};
  padding: ${theme.spacing(1.625)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.25)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(0.9)}; 
    justify-content: bottom; 
    align-items: left; 
    text-align: left; 
  }
`;

// News header styling
export const NewsHeader = styled.h2`
  font-size: ${theme.spacing(2.25)};
  margin-bottom: ${theme.spacing(1.25)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.5)};
    margin-bottom: ${theme.spacing(0.625)};
  }
`;

// News title styling
export const NewsTitle = styled.h3`
  font-size: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(1.25)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(2.3)};
    margin-bottom: ${theme.spacing(0.625)};
  }
`;

// News text styling
export const NewsText = styled.p`
  font-size: ${theme.spacing(1.75)};
  margin-bottom: ${theme.spacing(1.25)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.9)};
    margin-bottom: ${theme.spacing(0.625)};
  }
`;

// Read more link styling
export const ReadMore = styled.a`
  display: inline-block;
  margin-top: ${theme.spacing(1.875)};
  width: fit-content;
  padding: ${theme.spacing(0.625)} ${theme.spacing(1.25)};
  background-color: ${theme.colors.button};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: ${theme.spacing(0.625)};
  font-size: ${theme.spacing(1.75)};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.8)};
    margin-top: ${theme.spacing(1.25)};
  }
`;

// News meta information styling
export const NewsMeta = styled.div`
  font-size: ${theme.spacing(1.5)};
  color: ${theme.colors.textgray};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.spacing(1.5)};
  }
`;

// new pagintaion

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  // position: sticky;
  bottom: 0;
  z-index: 100;
`;

export const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: 2px solid #007bff;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  outline: none;
  min-width: 140px;

  &:hover {
    background-color: #fff;
    color: #007bff;
  }
`;
