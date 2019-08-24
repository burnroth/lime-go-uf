import React from "react";
import Form from "../components/Form";
import Head from "next/head";
import Header from "../components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Features from "../components/Features";
import Video from "../components/Video";
import Maximize from "../components/Maximize";
import Navbar from "../components/Navbar";
import Links from "../components/Links";

const Index = () => {
  return (
    <main id="uf">
       <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9TZSDX" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
      <Navbar />
      <Head>
        <title>Lime Go ❤️ UF </title>
        <link rel="icon" type="image/png" href="/static/favicon.ico" sizes="32x32"></link>
        <link rel="canonical" href="https://www.lime-go.se/uf"></link>
        <meta name="description" content="Vi på Lime älskar försäljning och entreprenörskap! Därför ger vi alla UF-företagare, alumner och lärare fri tillgång till säljverktyget Lime Go."></meta>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T9TZSD');`
          }}
        />
        }
      </Head>
      <Header />
      <Features />
      <Video />
      <Maximize />
      <Links />
      <Form />
    </main>
  );
};

export default Index;
