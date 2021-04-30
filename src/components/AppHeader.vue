<style scoped>
</style>
<template>
  <v-app-bar color="accent" app>
    <v-btn link text color="primary" style="font-weight: bold" to="/"
      >Home</v-btn
    >
    <v-toolbar-items>
      <template>
        <v-btn
          color="secondary"
          link
          text
          v-for="item in navItems"
          style="font-weight: bold"
          :to="item.link"
          v-bind:key="item.link"
          >{{ item.name }}</v-btn
        >
      </template>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      navItems: [],
      switchState: false,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>