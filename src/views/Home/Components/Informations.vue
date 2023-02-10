<template>
  <div>
    <div class="text-center text-h5 mt-3 text-f">Akif Kadıoğlu</div>
    <v-icon
      class="ml-5 mr-5 mt-2 mb-2"
      :size="isMobile ? 25 : 40"
      v-for="(item, index) in talents"
      :key="index"
    >
      {{ item }}
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "Home-Informations",
  data() {
    return {
      isMobile: this.$functions.isMobile(),

      talents: [
        this.$icons.GO,
        this.$icons.VUE,
        this.$icons.JAVASCRIPT,
        this.$icons.LARAVEL,
        this.$icons.PHP,
      ],
    };
  },
};
</script>
