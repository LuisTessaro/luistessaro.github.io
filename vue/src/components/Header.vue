<template>
  <div id="page-top">
    <div class="topnav" id="top-nav">
      <a class="navbar-brand active" href="#page-top">Luís Tessaro</a>
      <a v-on:click="opMenu" class="other-nav-elem" href="#about">About</a>
      <a v-on:click="opMenu" class="other-nav-elem" href="#portfolio">Portfolio</a>
      <a v-on:click="opMenu" class="other-nav-elem" href="#resume">Resume</a>
      <a v-on:click="opMenu" class="other-nav-elem" href="#contact">Contact</a>
      <a href="javascript:void(0);" class="icon" button v-on:click="opMenu">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    opMenu: () => {
      const x = document.getElementById("top-nav");
      if (x.className === "topnav") x.className += " responsive";
      else x.className = "topnav";
    }
  }
};
</script>

<style scoped>
.topnav {
  font-family: "Oswald", sans-serif;
  overflow: hidden;
  background: #121d1f;
  position: fixed;
  width: 100%;
  top: 0;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 30px;
}

.topnav a:hover:not(.navbar-brand) {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  text-decoration: none;
  color: #ffffff;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 1200px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 1200px) {
  .topnav.responsive {
    position: fixed;
    width: 100%;
    top: 0;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
