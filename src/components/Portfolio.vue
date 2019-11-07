<template>
  <div class="portfolio" id="portfolio">
    <div>
      <div class="container">
        <div class="section-title text-center center">
          <h2>Portfolio</h2>
          <hr />
        </div>
        <div v-bind:key="item.id" v-for="item in items">
          <div class="containerCard">
            <article class="card">
              <a :href="item.href" class="card__link">
                <div class="card__media">
                  <img class="portfolio-img" :src="item.imgpath" />
                </div>

                <div class="card__header">
                  <h3 class="card__header-title">{{item.title}}</h3>
                  <p class="card__header-meta">{{item.subtitle}}</p>
                  <div class="card__header-icon">
                    <svg viewBox="0 0 28 25">
                      <path
                        fill="#fff"
                        d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      items: []
    };
  },
  created() {
    this.items = [
      {
        href: "https://https://github.com/LuisTessaro/Express-Example",
        imgpath: require("../assets/portfolio/express.png"),
        title: "Express-Example",
        subtitle: "Web Development"
      },
      {
        href: "https://github.com/LuisTessaro/TextbasedMMO_Telegram-bot",
        imgpath: require("../assets/portfolio/dicesmall.png"),
        title: "Telegram RPG",
        subtitle: "Game Development"
      },
      {
        href: "https://github.com/LuisTessaro/InvokerGame",
        imgpath: require("../assets/portfolio/invokergamesmall.jpg"),
        title: "Invoker Game",
        subtitle: "Game Development"
      },
    ];
  }
};
</script>

<style scoped>
.portfolio {
  color: #121d1f;
  background: #7bc3d1;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 70px
}

.portfolio h2 {
  color: #fff;
}
.portfolio hr {
  background: rgba(255, 255, 255, 0.3);
  height: 4px;
  width: 70px;
  text-align: center;
  position: relative;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 0;
}

.portfolio-img {
  width: 100%;
  height: 100%;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0) translateY(50%);
  }
  90% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.containerCard {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.card {
  position: relative;
  width: 20em;
  background-color: #292929;
  transition: all 0.3s ease-in-out;
}
.card:hover {
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.2);
}

.card__link {
  display: block;
  padding: 1em;
  text-decoration: none;
}

.card__media {
  padding: 5px;
}

.card__media svg path {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center center;
}

.card:hover .card__media svg path {
  animation: fadeInScale 0.3s ease-in-out forwards;
}

.card:hover .card__media svg path:nth-child(2) {
  animation-delay: 0.1s;
}

.card:hover .card__media svg path:nth-child(3) {
  animation-delay: 0.2s;
}

.card__header {
  position: relative;
}

.card__header-title {
  margin: 0 0 0.25em;
  color: white;
}

.card__header-meta {
  margin: 0;
  color: #999;
}

.card__header-icon {
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1em;
  transform: translateX(-20%);
  width: 2em;
  height: 2em;
  transition: all 0.3s ease-in-out;
}
.card:hover .card__header-icon {
  opacity: 1;
  transform: translateX(0);
}
</style>
