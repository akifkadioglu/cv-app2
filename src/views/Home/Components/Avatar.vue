<template>
  <v-avatar :size="controller.avatarSize">
    <transition name="fade" mode="out-in">
      <img src="@/assets/home_avatar.jpeg" alt="akifkadioglu" />
    </transition>
  </v-avatar>
</template>

<script>
import { HomeController } from '../HomeController';
export default {
  name: "Home-Avatar",
  data() {
    return {
      controller: HomeController,
    };
  },
};
</script>
