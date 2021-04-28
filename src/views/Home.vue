<template>
  <div class="home">
    <h1>Home</h1>
    <StockSearch />
  </div>
</template>

<script>
// @ is an alias to /src
import StockSearch from "@/components/StockSearch";
export default {
  name: "Home",
  components: { StockSearch },
};
</script>
