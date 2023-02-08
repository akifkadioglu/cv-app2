<template>
  <v-avatar :size="controller.avatarSize">
    <v-img
      src="@/assets/home_avatar.webp"
      alt="akifkadioglu"
      :width="controller.avatarSize"
      :height="controller.avatarSize"
      rel="preload"
    />
  </v-avatar>
</template>

<script>
import { HomeController } from "../HomeController";
export default {
  name: "Home-Avatar",
  data() {
    return {
      controller: HomeController,
    };
  },
};
</script>
