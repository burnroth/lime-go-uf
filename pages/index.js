import React from "react";
import Form from "../components/Form";
import Helmet from "react-helmet";
import Header from "../components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../style.css";
import Features from "../components/Features";
import Video from "../components/Video";
import Maximize from "../components/Maximize";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <main id="uf">
      <Navbar/>
      <Helmet>
        <title>Yoloswagging</title>
      </Helmet>
      <Header />
      <Features/>
      <Video/>
      <Maximize />
      <Form />
    </main>
  );
};

export default Index;
