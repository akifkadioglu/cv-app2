<template>
  <div>
    <v-bottom-sheet v-model="sheet" inset v-click-outside="onClickOutside">
      <v-sheet class="text-start" height="350px">
        <div class="text-end">
          <PrimaryIconButton
            class="mr-2 mt-2"
            :color="'error'"
            :icon="'mdi-close'"
            @click="$emit('closeSheet')"
          />
        </div>
        <div class="ml-4 mr-4">
          <div class="title">
            {{ title }}
          </div>
          <div class="subtitle mt-3">
            {{ content }}
          </div>
          <PrimaryTextButton
            class="mt-5"
            :link="link"
            :color="'secondary'"
            :title="$t($keys.VISIT)"
          />
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import PrimaryIconButton from "../../../../components/Buttons/PrimaryIconButton.vue";
import PrimaryTextButton from "../../../../components/Buttons/PrimaryTextButton.vue";
export default {
  components: { PrimaryTextButton, PrimaryIconButton },
  props: {
    sheet: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClickOutside(e) {
      if (e.target.className === "v-overlay__scrim") {
        this.$emit("closeSheet");
      }
    },
  },
};
</script>
