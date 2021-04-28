<template>
  <div>
    <h1>Chart</h1>
    <div>
      <v-chip
        v-for="(entry, j) in $route.params.symbols.split('|')"
        :key="j"
        color="green"
      >
        {{ entry }}
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "StockChart",
};
</script>