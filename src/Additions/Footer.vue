<template>
  <v-footer padless class="footer">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Akif Kadıoğlu</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
