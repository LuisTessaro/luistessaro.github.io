<template>
  <div class="portfolio">
    <div id="portfolio">
      <div class="container">
        <div class="section-title text-center center">
          <h2>Portfolio</h2>
          <hr />
        </div>
        <!-- <div class="categories">
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
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style scoped>
.portfolio {
  padding: 100px 0 40px 0;
  color: #121d1f;
  background: #7bc3d1;
  text-align: center;
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
</style>
