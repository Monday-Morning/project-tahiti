import React from 'react';
import Header from '../components/marginals/Header';
import Footer from "../components/marginals/Footer";
import TopBar from '../components/marginals/tobBar';
import ReactLogo from "../components/homepage/ReactLogo";

function Home() {
  return (
    <div>
      <TopBar/>
      <Header/>
      <ReactLogo/>
      <Footer/>
    </div>
  );
}

export default Home;
