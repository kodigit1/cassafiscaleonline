import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";
import Wrapper from "../layout/wrapper";
import ReactGA from 'react-ga4';

const Home = () => {
  ReactGA.initialize('G-YCB5FJGEY9');
  return (
    <Wrapper>
      <SEO pageTitle={"Registratore di cassa online"} />
      <HomeTwo />
    </Wrapper>
  );
};

export default Home;
