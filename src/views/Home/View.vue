<template>
  <div class="wrap">
    
    <v-container>
      <div class="text-center contents">
        <Avatar class="component-positions" />
        <Informations class="component-positions" />
        <Pages class="mt-5 component-positions" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Avatar from "./Components/Avatar.vue";
import Informations from "./Components/Informations.vue";
import Pages from "./Components/Pages.vue";

export default {
  name: "Home-View",
  components: {
    Avatar,
    Informations,
    Pages,
  },
};
</script>
<style scoped>
.component-positions {
  z-index: 1;
  position: relative;
}

</style>
