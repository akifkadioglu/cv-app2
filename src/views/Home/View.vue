<template>
  <v-container>
    <div class="text-center">
      <Avatar class="component-positions" />
      <Informations class="component-positions" />
      <Pages class="mt-5 component-positions" />
    </div>
    <Background class="bg-position" />
  </v-container>
</template>

<script>
import Avatar from "./Components/Avatar.vue";
import Background from "./Components/Background.vue";
import Informations from "./Components/Informations.vue";
import Pages from "./Components/Pages.vue";

export default {
  name: "Home-View",
  components: { Avatar, Informations, Pages, Background },
};
</script>
<style scoped>
.bg-position {
  position: relative;
}
.component-positions {
  z-index: 1;
  position: relative;
}
</style>
