import React, { useState, useEffect } from "react";
import Trending from "../../components/Trending/Trending";
import AllNews from "../../components/allnews/AllNews";
import MagaZines from "../../components/magazine/MagaZine";
import {
  HomeContainer,
  ContentWrapper,
  NewsSection,
  MagazineSection,
} from "../../pages/Home/Home.styles";
import Loader from "../../../components/loder/Loder";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  

  // Simulate a loading delay with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <HomeContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Trending />
          <ContentWrapper>
            <NewsSection>
              <AllNews />
            </NewsSection>
            <MagazineSection>
              <MagaZines />
            </MagazineSection>
          </ContentWrapper>
        </>
      )}
    </HomeContainer>
  );
};

export default Home;