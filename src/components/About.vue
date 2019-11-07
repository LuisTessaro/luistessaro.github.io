<template>
  <div class="about" id="about">
    <div class="title">
      <h2>About Me</h2>
      <hr />
    </div>

    <div class="img-container">
      <img src="img/about.jpg" class="img" />
    </div>

    <div class="about-container">
      <div class="about-text">
        <p>Rank 1 Monk parser for two consecutive tiers.</p>
        <p>IOT lover, anime enthusiast. I also do computer science.</p>
        <p>NodeJS, MongoDB, Vue, CSS, C/C#/C++, Java, Python, SQL, VisualBasic.net among some other ones that I dont care as much.</p>
        <div class="btn-container">
          <a
            class="btn"
            href="https://drive.google.com/open?id=0B1iOhYqSpMq2V1gzUllnN1dvZXM"
            target="_blank"
          >
            <i class="fa fa-download"></i> Download Resume (PT-BR)
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
h2 {
  line-height: 40px;
  margin: 0;
  color: #121d1f;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 34px;
  margin-top: 90px;
  text-align: center;
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

.title {
  display: block;
}

.img-container {
  margin-top: 50px;
}

.img {
  display: block;
  margin: auto;
  border-radius: 50%;
  height: 50%;
  width: 50%;
  max-width: 200px;
}

.about-container {
  width: 80%;
  margin: auto;
}

.about-text {
  font-family: "Open Sans", sans-serif;
  color: #656c6d;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

.btn-container {
  margin-top: 40px;
  font-family: "Open Sans", sans-serif;
  padding: 25px 0px 20px 0px;
  text-align: center;
  margin-bottom: 40px;
}

.btn {
  margin: auto;
  background-color: black;
  color: #ffffff;
  padding: 20px;
}

a {
  text-decoration: none;
}
</style>
