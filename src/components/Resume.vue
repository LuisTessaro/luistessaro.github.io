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
      items: []
    };
  },
  created() {
    this.items = [
      {
        timeline: "2019 - 2019",
        title: "Mokamind",
        name: "6 Month Internship",
        description:
          "Worked with everything related to web development and AI, front to back. Helped build the multi-state iot infrastructure for the two biggest banks in Brazil (Itau, Bradesco)"
      },
      {
        timeline: "2014 - 2019",
        title: "Mackenzie - FCI",
        name: "Computer Science Graduate",
        description: "Majored on CS."
      },
      {
        timeline: "2014 - 2014",
        title: "Casa Taiguara de Cultura Digital",
        name: "Game Design course",
        description:
          "Got to experiance the managing process of a game development project, the concepts of what makes a game and got to work in a group to develop a board game."
      },
      {
        timeline: "2011 - 2013",
        title: "ETEC Albert Einsten",
        name: "IT Technician",
        description:
          "Studied the basic concepts of computer science and project management."
      },
      {
        timeline: "2008 - 2014",
        title: "Fisk",
        name: "English course",
        description:
          "Complete course with a international certification of proficiency."
      }
    ];
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

.timeline-body {
  padding-right: 40px;
  text-align: justify;
  text-justify: inter-word;
}

.resume {
  margin-bottom: 50px;
}
</style>
