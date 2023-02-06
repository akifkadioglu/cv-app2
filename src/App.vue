<template>
  <v-app>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view class="contents" />
      </transition>
    </v-main>
    <ChooseLanguage />
    <SwitchMode />
    <Footer />
  </v-app>
</template>

<script>
import ChooseLanguage from "./components/ChooseLanguage.vue";
import SwitchMode from "./components/SwitchMode.vue";
import Footer from "./components/Footer.vue";
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
