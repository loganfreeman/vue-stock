<template>
  <v-card color="blue lighten-2" dark>
    <v-card-title class="headline blue lighten-3">
      Search for Alpha Vantage APIs
    </v-card-title>

    <v-card-text>
      Alpha Vantage APIs are grouped into four categories: (1) Time Series Stock
      APIs, (2) Fundamental Data, (3) Physical and Digital/Crypto Currencies
      (e.g., Bitcoin), and (4) Technical Indicators. Examples in this
      documentation are for demo purposes. Claim your free API key today to
      explore our full API offerings!
      <a
        class="grey--text text--lighten-3"
        href="https://www.alphavantage.co/documentation/#"
        target="_blank"
        >Alpha Vantage APIs</a
      >.
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!values" color="grey darken-3" @click="values = null">
        Clear
        <v-icon right> mdi-close-circle </v-icon>
      </v-btn>
      <v-btn :disabled="!values" color="grey darken-3" @click="compare">
        Compare
        <v-icon right> mdi-chart-bar </v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <v-autocomplete
        v-model="values"
        :items="entries"
        :loading="isLoading"
        :search-input.sync="search"
        hide-no-data
        item-text="1. symbol"
        return-object
        label="Stock API"
        placeholder="Enter Stock Symbol to Search"
        prepend-icon="mdi-database-search"
        chips
        clearable
        multiple
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-expand-transition>
      <v-row v-if="values">
        <v-col v-for="(entry, j) in values" :key="j" :cols="3">
          <v-list>
            <v-list-item v-for="(item, key) in entry" :key="key">
              <v-list-item-content>
                <v-list-item-title v-text="key"></v-list-item-title>
                <v-list-item-subtitle v-text="item"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-expand-transition>
  </v-card>
</template>
<script>
import service from "@/service/stock";

export default {
  name: "StockSearch",
  data: () => ({
    entries: [],
    isLoading: false,
    values: null,
    search: null,
  }),

  computed: {},

  methods: {
    compare() {
      this.$router.push("/chart");
    },
  },

  watch: {
    search(val) {
      if (val.length < 2) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      service
        .searchSymbol(val)
        .then((res) => {
          const { bestMatches } = res.data;
          this.count = bestMatches.length;
          this.entries = bestMatches;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>