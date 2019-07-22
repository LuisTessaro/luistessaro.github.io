<template>
  <div id="app">
    <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
      <header id="header">
        <div class="intro">
          <div class="container">
            <div class="row">
              <div class="intro-text">
                <h1>
                  Hello, I'm
                  <span class="name">Luis Tessaro</span>
                </h1>
                <p>Backend and Game Developer</p>
                <a href="#about" class="btn btn-default btn-lg page-scroll">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="nav">
        <nav class="navbar navbar-custom">
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-main-collapse"
              >
                <i class="fa fa-bars"></i>
              </button>
              <a class="navbar-brand page-scroll" href="#page-top">Luís Tessaro</a>
            </div>
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul class="nav navbar-nav">
                <li class="hidden">
                  <a href="#page-top"></a>
                </li>
                <li>
                  <a class="page-scroll" href="#about">About</a>
                </li>
                <li>
                  <a class="page-scroll" href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a class="page-scroll" href="#resume">Resume</a>
                </li>
                <li>
                  <a class="page-scroll" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="about">
        <div class="container">
          <div class="section-title text-center center">
            <h2>About Me</h2>
            <hr />
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <img src="img/about.jpg" class="img-responsive" />
            </div>
            <div class="col-md-8 col-md-offset-2">
              <div class="about-text">
                <p>Top 1 nemesis parser as a monk for two consecutive tiers.</p>
                <p>I also do computer science.</p>
                <p>C#, Java, Python, SQL, NodeJS, VisualBasic.net</p>
                <p class="text-center">
                  <a
                    class="btn btn-primary"
                    href="https://drive.google.com/open?id=0B1iOhYqSpMq2V1gzUllnN1dvZXM"
                    target="_blank"
                  >
                    <i class="fa fa-download"></i> Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio">
        <div class="container">
          <div class="section-title text-center center">
            <h2>Portfolio</h2>
            <hr />
          </div>
          <div class="categories">
            <ul class="cat">
              <li>
                <ol class="type">
                  <li>
                    <a href="#" data-filter="*" class="active">All</a>
                  </li>
                  <li>
                    <a href="#" data-filter=".web">Web Design</a>
                  </li>
                  <li>
                    <a href="#" data-filter=".app">App Development</a>
                  </li>
                  <li>
                    <a href="#" data-filter=".game">Game Development</a>
                  </li>
                </ol>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="row">
            <div class="portfolio-items">
              <div class="col-sm-6 col-md-3 col-lg-3 game">
                <div class="portfolio-item">
                  <div class="hover-bg">
                    <a href="https://github.com/LuisTessaro/InvokerGame" target="_blank">
                      <div class="hover-text">
                        <h4>Invoker Game</h4>
                        <small>Game Development</small>
                      </div>
                      <img
                        src="img/portfolio/invokergamesmall.jpg"
                        class="img-responsive"
                        alt="Invoker Game"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 col-lg-3 app game">
                <div class="portfolio-item">
                  <div class="hover-bg">
                    <a
                      href="https://github.com/LuisTessaro/TextbasedMMO_Telegram-bot"
                      target="_blank"
                    >
                      <div class="hover-text">
                        <h4>Telegram RPG</h4>
                        <small>Game Development</small>
                      </div>
                      <img
                        src="img/portfolio/dicesmall.png"
                        class="img-responsive"
                        alt="Telegram bot"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 col-lg-3 app">
                <div class="portfolio-item">
                  <div class="hover-bg">
                    <a href="https://github.com/LuisTessaro/BotTelegram" target="_blank">
                      <div class="hover-text">
                        <h4>Telegram Bot</h4>
                        <small>App Development</small>
                      </div>
                      <img
                        src="img/portfolio/telegrambotsmall.png"
                        class="img-responsive"
                        alt="Telegram bot"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3 col-lg-3 app web">
                <div class="portfolio-item">
                  <div class="hover-bg">
                    <a href="https://github.com/LuisTessaro/MackTicket" target="_blank">
                      <div class="hover-text">
                        <h4>MackTicket</h4>
                        <small>App Development</small>
                        <small>Web Design</small>
                      </div>
                      <img
                        src="img/portfolio/mackticketsmall.png"
                        class="img-responsive"
                        alt="Mack Ticket"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="achievements" class="text-center">
        <div class="container">
          <div class="section-title center">
            <h2>Some Stats About Me</h2>
            <hr />
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="200ms">
              <div class="achievement-box">
                <span class="count">2</span>
                <h4>Languages</h4>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="400ms">
              <div class="achievement-box">
                <span class="count">6</span>
                <h4>Programming Languages</h4>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="200ms">
              <div class="achievement-box">
                <span class="count">2</span>
                <h4>Software Development Philosophies</h4>
              </div>
            </div>
            <div class="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="200ms">
              <div class="achievement-box">
                <span class="count">2000</span>
                <h4>Hours of Experience in personal projects</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="resume" class="text-center">
        <div class="container">
          <div class="section-title center">
            <h2>Education</h2>
            <hr />
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ul class="timeline">
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <h4>
                      2014
                      <br />-
                      <br />2018
                    </h4>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>Mackenzie FCI</h4>
                      <h4 class="subheading">Computer Science Undergraduate</h4>
                    </div>
                    <div class="timeline-body">
                      <p>Current occupation.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="timeline-image">
                    <h4>
                      2014
                      <br />-
                      <br />2014
                    </h4>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>Casa Taiguara de Cultura Digital</h4>
                      <h4 class="subheading">Game Design course</h4>
                    </div>
                    <div class="timeline-body">
                      <p>
                        I got to experience the managing process of a game project, the concepts of what makes a game and got to
                        work in a group to develop a board game.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <h4>
                      2011
                      <br />-
                      <br />2013
                    </h4>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>ETEC Albert Einsten</h4>
                      <h4 class="subheading">Information Technology technician course</h4>
                    </div>
                    <div class="timeline-body">
                      <p>Learned the basic concepts of computer science and project management.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-image">
                    <h4>
                      2010
                      <br />-
                      <br />2013
                    </h4>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>ETEC Albert Einsten</h4>
                      <h4 class="subheading">High School Degree</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">Basic high school education</p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image">
                    <h4>
                      2008
                      <br />-
                      <br />2014
                    </h4>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4>Fisk</h4>
                      <h4 class="subheading">English course</h4>
                    </div>
                    <div class="timeline-body">
                      <p>Complete course with a international certification of proficiency.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import Header from "./components/Header";
import Footer from './components/Footer'

export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style>
/* body {
  padding: 0;
  margin: 0;
}
#app {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  color: #656c6d;
  width: 100% !important;
  height: 100% !important;
}

h1 {
  margin-top: 200px;
  width: 100%;
  background: blue;
} */

body,
html {
  font-family: "Open Sans", sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  color: #656c6d;
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
p.intro {
  font-size: 16px;
  margin: 12px 0 0;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
}
a {
  color: #333;
}
a:hover,
a:focus {
  text-decoration: none;
  color: #7bc3d1;
}
ul,
ol {
  list-style: none;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.clearfix {
  display: inline-block;
}
* html .clearfix {
  height: 1%;
}
.clearfix {
  display: block;
}
ul,
ol {
  padding: 0;
  webkit-padding: 0;
  moz-padding: 0;
}
hr {
  height: 4px;
  width: 70px;
  text-align: center;
  position: relative;
  background: #7bc3d1;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
}
/* Home Section */
.intro {
  display: table;
  width: 100%;
  height: auto;
  padding: 100px 0;
  text-align: center;
  color: #fff;
  background-color: #7bc3d1;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.section-title.center {
  padding: 25px 0 45px 0;
}
/* About Section */
#about {
  padding: 100px 0;
  background: #f6f6f6;
}
#about .about-text {
  margin-left: 10px;
}
#about img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: inline-block;
}
#about p {
  margin-top: 20px;
  margin-bottom: 30px;
}
/* Skills Section */
#skills {
  padding: 100px 0;
  background: #7bc3d1;
}
#skills h2 {
  color: #fff;
}
#skills hr {
  background: rgba(255, 255, 255, 0.3);
}
#skills .skill {
  margin-bottom: 40px;
  text-align: center;
  padding: 0px;
}
#skills .skill h4 {
  font-weight: 600;
  color: #fff;
}
.chart {
  position: relative;
  display: inline-block;
  width: 152px;
  height: 152px;
  margin-bottom: 26px;
  text-align: center;
}
.chart canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.percent {
  display: inline-block;
  font-size: 21px;
  color: #121d1f;
  line-height: 152px;
  z-index: 2;
}
.percent:after {
  content: "%";
  margin-left: 0.1em;
  font-size: 0.8em;
}
/* Portfolio Section */
#portfolio {
  padding: 80px 0;
  background: #ffffff; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #ffffff 0%,
    #f4f5f6 49%,
    #ffffff 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #ffffff),
    color-stop(49%, #f4f5f6),
    color-stop(100%, #ffffff)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #ffffff 0%,
    #f4f5f6 49%,
    #ffffff 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #ffffff 0%,
    #f4f5f6 49%,
    #ffffff 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #ffffff 0%,
    #f4f5f6 49%,
    #ffffff 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #f4f5f6 49%,
    #ffffff 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 ); /* IE6-9 */
}
.categories {
  padding-bottom: 50px;
  text-align: center;
}
ul.cat li {
  display: inline-block;
}
ol.type li {
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 30px;
}
ol.type li a {
  background: #7bc3d1;
  color: #fff;
  padding: 6px 14px;
}
ol.type li a.active {
  background: #121d1f;
  color: #fff;
}
ol.type li a:hover {
  background: #121d1f;
  color: #fff;
}
.isotope-item {
  z-index: 2;
}
.isotope-hidden.isotope-item {
  z-index: 1;
}
.isotope,
.isotope .isotope-item {
  /* change duration value to whatever you like */
  -webkit-transition-duration: 0.8s;
  -moz-transition-duration: 0.8s;
  transition-duration: 0.8s;
}
.isotope-item {
  margin-right: -1px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.isotope {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition-property: height, width;
  -moz-transition-property: height, width;
  transition-property: height, width;
}
.isotope .isotope-item {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition-property: -webkit-transform, opacity;
  -moz-transition-property: -moz-transform, opacity;
  transition-property: transform, opacity;
}
.portfolio-item {
  margin: 15px 0;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.portfolio-item:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
.portfolio-item .hover-bg {
  height: 260px;
  overflow: hidden;
  position: relative;
}
.hover-bg .hover-text {
  position: absolute;
  text-align: center;
  margin: 0 auto;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.66);
  padding: 33% 0 0 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
}
.hover-bg .hover-text > h4 {
  opacity: 0;
  color: #fff;
  font-weight: 400;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  transition: all 0.3s;
}
.hover-bg:hover .hover-text > h4 {
  opacity: 1;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.hover-bg .hover-text > i {
  opacity: 0;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  transition: all 0.3s;
}
.hover-bg:hover .hover-text > i {
  opacity: 1;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}
.hover-bg:hover .hover-text {
  opacity: 1;
}
#portfolio i.fa {
  font-size: 20px;
  padding: 5px;
  color: #e87e04;
}
/* Achivements Section */
#achievements {
  padding: 100px 0;
  background: #7bc3d1;
}
#achievements h2 {
  color: #fff;
}
#achievements hr {
  background: rgba(255, 255, 255, 0.3);
}
.achievement-box h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  margin-left: 5px;
}
.achievement-box span.count {
  font-size: 52px;
  font-weight: 600;
  display: block;
  color: #121d1f;
  padding: 0;
  margin: 0;
}
/* Resume Section */
#resume {
  padding: 100px 0;
  background: #f6f6f6;
}
.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}
.timeline:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 2px;
  margin-left: -1.5px;
  background-color: #eee;
}
.timeline > li {
  position: relative;
  margin-bottom: 50px;
  min-height: 50px;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li .timeline-panel {
  float: right;
  position: relative;
  width: 100%;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li .timeline-image {
  z-index: 100;
  position: absolute;
  left: 0;
  width: 70px;
  height: 70px;
  margin-left: 0;
  border: 1px solid #eee;
  border-radius: 100%;
  text-align: center;
  background: #fff;
}
.timeline > li .timeline-image h4 {
  margin-top: 20px;
  font-size: 14px;
  text-transform: uppercase;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li:last-child {
  margin-bottom: 40px;
}
.timeline .timeline-heading h4 {
  margin-top: 0;
  text-transform: uppercase;
  font-size: 16px;
}
.timeline .timeline-heading h2 {
  margin-top: 30px;
}
.timeline .timeline-heading h4.subheading {
  text-transform: none;
  color: #629ca7;
  font-size: 20px;
}
.timeline .timeline-body > p,
.timeline .timeline-body > ul {
  margin-bottom: 0;
}
/* Footer Section*/
#footer {
  background: #121d1f;
  color: #7d8384;
  padding: 30px 0 25px 0;
}
#footer p {
  font-size: 13px;
}
#footer a {
  color: #a0a5a5;
}
#footer a:hover {
  color: #7bc3d1;
}

/* Media Queries */
@media (min-width: 768px) {
  .intro {
    height: 100%;
    padding: 0;
    text-align: left;
    color: #fff;
  }
  .intro h1 {
    font-size: 60px;
    font-weight: 500;
    letter-spacing: -2px;
  }
  .intro .name {
    font-weight: 600;
  }
  .intro .intro-text {
    max-width: 75%;
  }
  .intro .intro-text p {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  section {
    padding: 120px 0;
  }
  header .intro-text {
    padding-top: 300px;
    padding-bottom: 200px;
  }
  .timeline:before {
    left: 50%;
  }
  .timeline > li {
    margin-bottom: 100px;
    min-height: 100px;
  }
  .timeline > li .timeline-panel {
    float: left;
    width: 41%;
    padding: 0 20px 20px 30px;
    text-align: right;
  }
  .timeline > li .timeline-image {
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
  }
  .timeline > li .timeline-image h4 {
    margin-top: 16px;
    line-height: 18px;
    font-weight: 400;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    float: right;
    padding: 0 30px 20px 20px;
    text-align: left;
  }
}

@media (min-width: 992px) {
  #here-me h1 {
    margin: 10px 0 0px;
  }
  .timeline > li {
    min-height: 150px;
  }
  .timeline > li .timeline-panel {
    padding: 0 20px 20px;
  }
  .timeline > li .timeline-image {
    width: 150px;
    height: 150px;
    margin-left: -75px;
  }
  .timeline > li .timeline-image h4 {
    margin-top: 30px;
    font-size: 18px;
    line-height: 26px;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 0 20px 20px;
  }
}

@media (min-width: 1200px) {
  .timeline > li {
    min-height: 170px;
  }
  .timeline > li .timeline-panel {
    padding: 10px 20px 20px 100px;
  }
  .timeline > li .timeline-image {
    width: 150px;
    height: 150px;
    margin-left: -75px;
  }
  .timeline > li .timeline-image h4 {
    margin-top: 40px;
    font-weight: 400;
  }
  .timeline > li.timeline-inverted > .timeline-panel {
    padding: 10px 100px 20px 20px;
  }
}
</style>
