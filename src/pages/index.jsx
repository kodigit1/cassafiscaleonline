import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";
import Wrapper from "../layout/wrapper";
import ReactGA from 'react-ga4';

const Home = () => {
  
  return (
    <Wrapper>
      <SEO pageTitle={"Registratore di cassa online"} />
      <HomeTwo />
    </Wrapper>
  );
};

export default Home;
