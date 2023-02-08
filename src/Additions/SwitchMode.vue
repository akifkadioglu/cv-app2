<template>
  <div class="switch-mode">
    <v-btn
      aria-label="switch_mode"
      depressed
      fab
      @click="$functions.switchMode($vuetify)"
      color="#00000000"
    >
      <v-icon>
        {{ $icons.DARKMODE }}
      </v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.switch-mode {
  position: fixed;
  left: 10px;
  top: 10px;
}
</style>
