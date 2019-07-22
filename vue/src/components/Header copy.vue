<template>
  <div id="page-top">
    <div class="black-background">
      <ul class="nav-bar">
        <li class="nav-header">
          <a class="navbar-brand" href="#page-top">Luís Tessaro</a>
        </li>
        <li>
          <a class="other-nav-elem" href="#about">About</a>
        </li>
        <li>
          <a class="other-nav-elem" href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a class="other-nav-elem" href="#resume">Resume</a>
        </li>
        <li>
          <a class="other-nav-elem" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.black-background {
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background: #121d1f;
  padding: 30px 0 30px 0;
}

li {
  list-style: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.navbar-brand {
  font-family: "Oswald", sans-serif;
  text-decoration: none;
  color: #ffffff;
  padding: 15px;
  font-size: 50px;
  font-weight: 700;
}

.other-nav-elem {
  font-weight: 300;
  font-size: 30px;
  color: #ffffff;
  text-decoration: none;
  padding: 5px;
}

@media (min-width: 1200px) {
  .nav-bar {
    width: 70%;
    margin: auto;
  }
  li {
    display: inline;
  }
}
</style>
