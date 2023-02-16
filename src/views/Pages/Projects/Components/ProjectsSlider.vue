<template>
  <div class="projects-banner">
    <carousel-3d :height="isMobile ? 310 : 500" :width="isMobile ? 310 : 500">
      <slide
        v-for="(item, index) in projects"
        :key="index"
        class="transparent"
        :index="index"
      >
        <v-card
          outlined
          :height="isMobile ? 310 : 500"
          :width="isMobile ? 310 : 500"
          color="white"
          class="card-base"
        >
          <div class="card-image">
            <v-img :src="item.img" rel="preload" :alt="item.title" />
          </div>

          <v-card-actions class="card-button">
            <PrimaryButton
              :title="item.title"
              @click="$emit('getContent', item)"
            />
          </v-card-actions>
        </v-card>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import PrimaryButton from "../../../../components/Buttons/PrimaryTextButton.vue";

export default {
  components: {
    Carousel3d,
    Slide,
    PrimaryButton,
  },
  data() {
    return {
      isMobile: this.$functions.isMobile(),
      projects: [
        {
          content: this.$keys.PROJECT_VIEW_PAGE__P_OKUL_DESCRIPTION,
          title: "P-Okul",
          img: require("@/assets/projectsIcons/pokul.webp"),
          link: "https://www.p-okul.net/",
        },
        {
          content: this.$keys.PROJECT_VIEW_PAGE__KADIOG_DESCRIPTION,
          title: "Kadiog",
          img: require("@/assets/projectsIcons/kadiog.webp"),
          link: "https://github.com/akifkadioglu/kadiog",
        },

        {
          content: this.$keys.PROJECT_VIEW_PAGE__BMI_CALCULATOR_DESCRIPTION,
          title: "BMI Calculator",
          img: require("@/assets/projectsIcons/bmi_calculator.webp"),
          link: "https://play.google.com/store/apps/details?id=com.akifkadioglu.bmi_calculator",
        },
      ],
    };
  },
};
</script>

<style>
.card-button {
  bottom: 0;
  position: fixed;
  width: 100%;
}
.card-base {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-image {
  width: 100%;
}
</style>
