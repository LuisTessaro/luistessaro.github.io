<template>
  <div class="contact" id="contact">
    <div class="title">
      <h2>Contact</h2>
      <hr />
    </div>
    <div class="contact-options">
      <div class="location">
        <i class="fa fa-map-marker fa-2x"></i>
        <p>
          São Paulo,
          <br />Brazil, São Paulo
        </p>
      </div>

      <div class="mail">
        <i class="fa fa-envelope-o fa-2x"></i>
        <p>lh.pedrosot@hotmail.com</p>
      </div>

      <div class="phone">
        <i class="fa fa-phone fa-2x"></i>
        <p>+55 (11) 97194284</p>
      </div>
    </div>

    <div class="social">
      <ul>
        <li>
          <a href="https://www.facebook.com/luis.tessaro.7" target="_blank">
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/LuisTessaro" target="_blank">
            <i class="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luis-tessaro-36a712150/" target="_blank">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.contact {
  padding: 100px 0 40px 0;
  color: #121d1f;
  background: #7bc3d1;
  text-align: center;
}
.contact h2 {
  color: #fff;
}
.contact hr {
  background: rgba(255, 255, 255, 0.3);
  height: 4px;
  width: 70px;
  text-align: center;
  position: relative;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
}
.contact h3 {
  padding-top: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
}
.contact i.fa {
  color: #121d1f;
  margin-bottom: 10px;
}
.contact .text-danger {
  color: #e87e04;
}
.contact .social {
  margin-top: 60px;
}
.contact .social ul li {
  display: inline-block;
  margin: 0 20px;
}
.contact .social ul {
  padding-inline-start: 0px;
}
.contact .social i.fa {
  font-size: 30px;
  padding: 4px 5px;
  color: #fff;
  transition: all 0.5s;
}
.contact .social i.fa:hover {
  color: #121d1f;
}

@media (min-width: 1200px) {
  .contact-options {
    width: 50%;
    margin: auto;
    display: flex;
  }
  .contact-options > div {
    flex: 1;
  }
}
</style>
