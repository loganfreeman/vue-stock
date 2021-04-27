<style scoped>
.v-btn:hover:before {
  background-color: transparent;
}
.active {
  color: #1976d2 !important;
}
</style>
<style >
.no-transitions,
.no-transitions:before {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}

.no-transitions:before {
  background-color: transparent !important;
}

.no-transitions:hover:before {
  background-color: transparent !important;
}

.no-transitions:blur:before {
  background-color: transparent !important;
}

.v-application a {
  color: white !important;
}
:-webkit-autofill {
  animation-name: onAutoFillStart;
  transition: background-color 50000s ease-in-out 0s;
}
</style>
<template>
  <v-app-bar color="accent" app>
    <v-btn link text color="primary" style="font-weight: bold" to="/home"
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
    <v-btn class="no-transitions" :ripple="false" right absolute text>
      <v-btn class="no-transitions" :depressed="true" :ripple="false" text>
        <v-btn class="no-transitions" icon>
          <v-icon
            @click="gotoLightTheme()"
            :color="theme === 'light' ? 'orange' : 'grey'"
            >wb_sunny</v-icon
          >
        </v-btn>
        <v-switch
          color="primary"
          v-model="switchState"
          style="margin-top: 25px"
          @change="onToggle()"
        ></v-switch>
        <v-btn class="no-transitions" icon>
          <v-icon
            @click="gotoDarkTheme()"
            :color="theme === 'dark' ? 'white' : 'grey'"
            >nights_stay</v-icon
          >
        </v-btn>
      </v-btn>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "the-header",
  data() {
    return {
      navItems: [],
      switchState: false,
    };
  },
  computed: {
    ...mapGetters({
      theme: "themePicker/theme",
      rootColor: "themePicker/rootColor",
      textColor: "themePicker/textColor",
    }),
  },
  watch: {},
  mounted() {
    if (this.theme === "light") {
      this.gotoLightTheme();
    } else {
      this.gotoDarkTheme();
    }
  },
  methods: {
    ...mapMutations({
      setLightTheme: "themePicker/setLightTheme",
      setDarkTheme: "themePicker/setDarkTheme",
    }),

    onToggle() {
      if (this.$vuetify.theme.light) {
        this.gotoDarkTheme();
      } else {
        this.gotoLightTheme();
      }
    },
    gotoDarkTheme() {
      this.$vuetify.theme.light = false;
      this.$vuetify.theme.dark = true;
      this.setDarkTheme();
      this.switchState = true;
    },
    gotoLightTheme() {
      this.$vuetify.theme.light = true;
      this.$vuetify.theme.dark = false;
      this.setLightTheme();
      this.switchState = false;
    },
  },
};
</script>