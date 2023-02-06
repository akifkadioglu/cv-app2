<template>
  <div>
    <div
      v-for="(item, index) in 13"
      :key="index"
      :style="
        'top:' + Math.random() * 100 + '%; left:' + Math.random() * 100 + '%'
      "
      class="home-bg"
    />
  </div>
</template>

<style>
.home-bg {
  border-radius: 50%;
  height: 250px;
  width: 250px;
  background: radial-gradient(circle, #0077a64f, #00466c4f, #00223c4f);
  position: fixed;
}
</style>
