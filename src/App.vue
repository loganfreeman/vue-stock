<template>
  <v-app
    :class="{
      'background-light': darkMode,
      'background-dark': !darkMode,
    }"
  >
    <the-header></the-header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<style lang="scss">
</style>

<script>
import { mapGetters } from "vuex";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  computed: {
    ...mapGetters({
      theme: "themePicker/theme",
    }),

    darkMode() {
      return this.theme === "light";
    },
  },
};
</script>
