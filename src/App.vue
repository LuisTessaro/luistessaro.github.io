<template>
  <div id="app">
    <Header></Header>
    <About></About>
    <Portfolio></Portfolio>
    <Resume></Resume>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
// import axios from "axios";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    About,
    Portfolio,
    Resume,
    Contact,
    Footer
  }
};
</script>

<style>
body,
html {
  min-width: 290px;
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding: 0px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  color: #656c6d;
  background-color: #f6f6f6;
  width: 100% !important;
  height: 100% !important;
}
h1 {
  font-weight: 700;
}
h1 strong {
  font-weight: 900;
}
h2 {
  line-height: 40px;
  margin: 0;
  color: #121d1f;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 34px;
}
h3,
h4 {
  color: #121d1f;
  font-size: 20px;
  font-weight: 600;
}
h5 {
  text-transform: uppercase;
  font-weight: 700;
  line-height: 20px;
}
</style>
