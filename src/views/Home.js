import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
//import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
//import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Footer from '../components/layout/Footer';
import { Helmet } from "react-helmet";


const Home = () => {

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="../assets/images/buff-logo.svg"></link>
      </Helmet>
      <Hero />
      <FeaturesSplit invertMobile topDivider imageFill />
      <Cta split />
      <Footer />
    </>
  );
}

export default Home;