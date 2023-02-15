<template>
  <v-container>
    <v-lazy v-model="isActive" transition="scroll-y-reverse-transition">
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card
            :to="item.routeName ? { name: item.routeName } : ''"
            :href="item.routeName ? '' : item.route"
            depressed
            :target="item.routeName ? '' : '_blank'"
            :color="item.color"
            dark
            tile
            outlined
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5 " v-text="$t(item.title)" />
                <v-card-subtitle class="text-start">
                  <p :style="'background:' + item.color" class="">
                    {{ $t(item.content) }}
                  </p>
                </v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
import { routeName } from "./../../../router/routeName";
import { keys } from "./../../../locales/keys";

export default {
  name: "Home-Pages",

  data: () => ({
    isActive: false,

    items: [
      {
        color: "#0078a6",
        title: keys.HOME_COMPONENTS_PAGES__RESUME_TITLE,
        content: "",
        routeName: "",
        route: "/img/cv.png",
      },
      {
        color: "#00476c",
        title: keys.HOME_COMPONENTS_PAGES__PROJECTS_TITLE,
        content: keys.HOME_COMPONENTS_PAGES__PROJECTS_DESCRIPTION,
        routeName: routeName.PROJECTS,
        route: "",
      },
      
    ],
  }),
};
</script>
<style scoped>
.avatar {
  margin-right: 15px;
  margin-top: auto;
  margin-bottom: auto;
}
.card-img {
  background-size: contain;
}
</style>
