import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  options: {
    customProperties: true,
  },
  theme: {
    themes: {
      light: {
        primary: "#4d392e", //form input border
        secondary: "#4d392e", //text color
        accent: "#f0ecda", // root color header and footer
        error: "#b71c1c",
        info: "#2196F3",
        success: "#B49B7F", // button color
        warning: "#FFC107",
      },
      dark: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF", //text color
        accent: "#757575", // root color header and footer
        error: "#E57373",
        info: "#2196F3",
        success: "#347737", // button color
        warning: "#FFC107",
      },
    },
  },
});
