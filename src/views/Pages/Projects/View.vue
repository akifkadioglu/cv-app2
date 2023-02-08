<template>
  <v-container>
    <div class="projects-banner">
      <carousel-3d :height="isMobile ? 310 : 500" :width="isMobile ? 310 : 500">
        <slide
          v-for="(item, index) in projects"
          :key="index"
          class="transparent"
          :index="index"
        >
          <v-card outlined>
            <v-img :src="item.img" rel="preload" :alt="item.title" />

            <v-card-actions>
              <PrimaryButton :title="item.title" @click="getContent(index)" />
            </v-card-actions>
          </v-card>
        </slide>
      </carousel-3d>
    </div>
    <BottomSheet
      @closeSheet="sheet = !sheet"
      :sheet="sheet"
      :content="$t(selectedItem.content)"
      :title="selectedItem.title"
      :link="selectedItem.link"
    />
  </v-container>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import BottomSheet from "./Components/BottomSheet.vue";
import PrimaryButton from "../../../components/Buttons/PrimaryTextButton.vue";

export default {
  name: "Pages-Projects-View",
  components: {
    Carousel3d,
    Slide,
    BottomSheet,
    PrimaryButton,
  },

  data() {
    return {
      isMobile: this.$functions.isMobile(),
      projects: [
        {
          content: this.$keys.PROJECT_VIEW_PAGE__P_OKUL_DESCRIPTION,
          title: "P-Okul",
          img: "https://www.p-okul.net/logo.png",
          link: "https://www.p-okul.net/",
        },
      ],
      selectedItem: {},
      sheet: false,
    };
  },
  methods: {
    getContent(index) {
      this.selectedItem = this.projects[index];
      this.sheet = true;
    },
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
