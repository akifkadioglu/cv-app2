<template>
  <div>
    <TitleWithDivider :title="$t($keys.CONTACTS)" />
    <div class="navbar">
      <v-tabs
        background-color="transparent"
        next-icon="mdi-arrow-right"
        prev-icon="mdi-arrow-left"
        show-arrows
        height="80px"
        aria-label="contacts"
        icons-and-text
      >
        <v-tabs-slider color="transparent" />

        <v-tab
          v-for="(item, index) in contacts"
          :key="index"
          :href="item.url"
          class="ml-5 mr-5 text--secondary"
          target="_blank"
        >
          <sub class="caption">{{ item.title }}</sub>
          <v-icon>{{ item.icon }}</v-icon>
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import TitleWithDivider from "../../../components/Divider/TitleWithDivider.vue";
export default {
  components: {
    TitleWithDivider,
  },

  data() {
    return {
      contacts: [
        {
          icon: this.$icons.GITHUB,
          title: "GitHub",
          url: "https://github.com/akifkadioglu",
        },
        {
          icon: this.$icons.LINKEDIN,
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/akif-kadioglu-88429a1b2/",
        },
        {
          icon: this.$icons.MAIL,
          title: "E-Mail",
          url: "mailto: akifkadioglu@yaani.com",
        },
        {
          icon: this.$icons.TWITTER,
          title: "Twitter",
          url: "https://twitter.com/akifkadioglu",
        },
        {
          icon: this.$icons.TELEGRAM,
          title: "Telegram",
          url: "https://t.me/akifkadioglu",
        },
        {
          icon: this.$icons.INSTAGRAM,
          title: "Instagram",
          url: "https://www.instagram.com/akifkadioglu",
        },
        {
          icon: this.$icons.TEXT,
          title: "Medium",
          url: "https://medium.com/@akifkadioglu",
        },
      ],
    };
  },
};
</script>
<style scoped>
.v-tabs__item--active {
  color: green;
}
</style>
