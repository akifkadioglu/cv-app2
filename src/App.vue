<template>
  <v-app>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view class="contents" />
      </transition>
    </v-main>
    <ChooseLanguage />
    <SwitchMode />
  </v-app>
</template>

<script>
import ChooseLanguage from "./components/ChooseLanguage.vue";
import SwitchMode from "./components/SwitchMode.vue";
export default {
  components: {
    ChooseLanguage,
    SwitchMode,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
