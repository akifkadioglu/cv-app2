<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark tile outlined class="card-img">
          <v-img
            class="white--text"
            height="170px"
            contain
            :src="item.src"
            position="right"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5" v-text="$t(item.title)" />
                <v-divider />
                <v-card-subtitle class="text-start" v-text="$t(item.content)" />

                <v-card-actions>
                  <v-btn
                    v-if="item.routeName"
                    :to="{ name: item.routeName }"
                    class="ml-2 caption"
                    depressed
                    color="secondary"
                  >
                    {{ $t($keys.GO) }}
                  </v-btn>
                  <v-btn
                    v-else
                    :href="item.route"
                    target="_blank"
                    class="ml-2 caption"
                    depressed
                    color="secondary"
                  >
                    {{ $t($keys.GO) }}
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import githubLogo from "./../../../assets/github.jpg";
import { routeName } from "./../../../router/routeName";
import { keys } from "./../../../locales/keys";
import { HomeController } from "../HomeController";

export default {
  name: "Home-Pages",
  data: () => ({
    controller: HomeController,
    items: [
      {
        color: "#1F7087",
        src: githubLogo,
        title: keys.HOME_COMPONENTS_PAGES__PROJECTS_TITLE,
        content: keys.HOME_COMPONENTS_PAGES__PROJECTS_DESCRIPTION,
        routeName: routeName.PROJECTS,
        route: "",
      },
      {
        color: "#000",
        src: githubLogo,
        title: keys.HOME_COMPONENTS_PAGES__GITHUB_TITLE,
        content: keys.HOME_COMPONENTS_PAGES__GITHUB_DESCRIPTIONS,
        routeName: "",
        route: "https://github.com/akifkadioglu?tab=repositories",
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
