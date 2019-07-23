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
export default {
  name: "Resume",
  data() {
    return {
      items: [
        {
          id: 0,
          timeline: "2019 - 2019",
          title: "MokaMind",
          name: "Internship",
          description: "Woked with everything related to web development and AI, front to back. Helped build the multi-state iot infrastructure for both of the biggest banks in Brazil (Itau, Bradesco) and develop industry automation analysis apps."
        },
        {
          id: 1,
          timeline: "2014 - 2019",
          title: "Mackenzie FCI",
          name: "Computer Science Undergraduate",
          description: "Majored on CS."
        },
        {
          id: 2,
          timeline: "2014 - 2014",
          title: "Casa Taiguara de Cultura Digital",
          name: "Game Design course",
          description:
            "Experienced the managing process of a game development project, the concepts of what makes a game and got to work in a group to develop a board game."
        },
        {
          id: 3,
          timeline: "2011 - 2013",
          title: "ETEC Albert Einsten",
          name: "IT Tec",
          description:
            "Studied the basic concepts of computer science and project management."
        },
        {
          id: 4,
          timeline: "2008 - 2014",
          title: "Fisk",
          name: "English course",
          description:
            "Complete course with a international certification of proficiency."
        }
      ]
    };
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
