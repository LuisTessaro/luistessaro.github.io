<template>
  <div id="resume" class="resume">
    <div class="title">
      <h2>Resume</h2>
      <hr />
    </div>
    <ul class="timeline">
      <div v-bind:key="item.id" v-for="item in items">
        <li>
          <h4>{{item.title}}</h4>
          <h5>{{item.timeline}}</h5>
          <h4 class="subheading">{{item.name}}</h4>
          <div class="timeline-body">
            <p>{{item.description}}</p>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>
                                                                              
<script>
import axios from "axios";
export default {
  name: "Resume",
  data() {
    return {
      items: []
    };
  },
  created() {
    axios.get("https://luiscv-backend.herokuapp.com/api/resume/").then(res => {
      this.items = res.data;
    });
  }
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
  margin-top: 40px;
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
</style>
