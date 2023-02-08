<template>
  <v-app class="wrap">
    <div class="home-bg-position">
      <img
        class="home-bg"
        src="@/assets/bg.webp"
        alt="background"
        width="1490px"
        rel="preload"
        height="2233px"
      />
    </div>
    <v-main>
      <transition name="scroll-y-reverse-transition" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <ChooseLanguage />
    <SwitchMode />
    <Footer />
  </v-app>
</template>

<script>
import ChooseLanguage from "./Additions/ChooseLanguage.vue";
import SwitchMode from "./Additions/SwitchMode.vue";
import Footer from "./Additions/Footer.vue";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";

export default {
  components: {
    ChooseLanguage,
    SwitchMode,
    Footer,
  },
  name: "App",
};
</script>
<style scoped>
.wrap {
  overflow: hidden;
  position: relative;
  height: 100vh;
}

.home-bg {
  opacity: 0.2;
  top: 0;
  width: 1490px;
  height: auto;
  filter: blur(3px);
}
.home-bg-position {
  position: fixed;
  text-align: center;
  width: 100%;
}
</style>
