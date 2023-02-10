<template>
  <v-container>
    <div class="text-center contents">
      <Avatar class="component-positions mt-5" />
      <Informations class="component-positions" />
      <Pages class="mt-5 component-positions" />
      <Contacts class="mt-5" />
    </div>
  </v-container>
</template>

<script>
import Avatar from "./Components/Avatar.vue";
import Contacts from "./Components/Contacts.vue";
import Informations from "./Components/Informations.vue";
import Pages from "./Components/Pages.vue";

export default {
  name: "Home-View",
  components: {
    Avatar,
    Informations,
    Pages,
    Contacts,
  },
};
</script>
<style scoped>
.component-positions {
  z-index: 1;
  position: relative;
}
</style>
