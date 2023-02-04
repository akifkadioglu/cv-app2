<template>
  <v-container>
    <div class="text-center">
      <Avatar />
      <Informations />
      <Pages />
    </div>
  </v-container>
</template>

<script>
import Avatar from "./Components/Avatar.vue";
import Informations from "./Components/Informations.vue";
import Pages from "./Components/Pages.vue";

export default {
  components: { Avatar, Informations, Pages },
  mounted() {
  },
};
</script>
