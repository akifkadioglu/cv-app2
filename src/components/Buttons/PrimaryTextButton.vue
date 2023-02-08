<template>
  <v-btn
    :color="color"
    width="100%"
    depressed
    tile
    :href="link"
    target="_blank"
    class="overline font-weight-bold"
    @click="$emit('click')"
    :aria-label="title"
  >
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
