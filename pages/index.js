import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Expertise from "../components/Expertise";
import Script from "next/script";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrew | Shopify Developer </title>
        <meta name="Andrew C Park" content="Shopify Developer" />
        <link rel="icon" href="/assets/ayce-logo.png" />
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>

      <Main />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
