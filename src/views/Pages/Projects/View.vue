<template>
  <v-container>
    <ProjectsSlider @getContent="getContent" />
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
import BottomSheet from "./Components/BottomSheet.vue";
import ProjectsSlider from "./Components/ProjectsSlider.vue";

export default {
  name: "Pages-Projects-View",
  components: {
    BottomSheet,
    ProjectsSlider,
  },

  data() {
    return {
      selectedItem: {},
      sheet: false,
    };
  },
  methods: {
    getContent(item) {
      this.selectedItem = item;
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
