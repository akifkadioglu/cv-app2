<template>
  <div class="navbar">
    <v-divider class="ma-auto mr-5" />
    <div>
      {{ title }}
    </div>

    <v-divider class="ma-auto ml-5" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
