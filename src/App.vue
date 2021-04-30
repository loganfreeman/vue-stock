<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<style lang="scss">
</style>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {},
};
</script>
