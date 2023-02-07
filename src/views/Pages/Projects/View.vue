<template>
  <v-container>
    <div class="projects-banner">
      <carousel-3d :height="isMobile ? 230 : 500" :width="isMobile ? 230 : 500">
        <slide v-for="(item, index) in projects" :key="index" :index="index">
          {{ item.title }}
        </slide>
      </carousel-3d>
    </div>
  </v-container>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "Pages-Projects-View",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      isMobile: this.$functions.isMobile(),
      projects: [
        {
          contents: "",
          title: "P-Okul",
          img: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
.projects-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
