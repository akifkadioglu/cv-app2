<template>
  <div class="choose-language">
    <v-menu
      bottom
      offset-y
      offset-x
      left
      transition="slide-x-transition"
      content-class="elevation-1"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed fab v-bind="attrs" v-on="on" color="#00000000">
          <v-icon>
            {{ $icons.LANGUAGE }}
          </v-icon>
        </v-btn>
      </template>

      <v-list color="white">
        <v-list-item
          class="list-item"
          v-for="(item, index) in $store.state.languages"
          :key="index"
          @click="$functions.switchLanguage(item.code, item.lang)"
        >
          <v-list-item-title class="black--text">
            {{ $t(item.lang) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped>
.choose-language {
  position: fixed;
  right: 10px;
  top: 10px;
}
</style>
