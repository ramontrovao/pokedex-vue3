<script lang="ts" setup>
    import Header from "../components/Header.vue"
    import Footer from "../components/Footer.vue"
</script>

<template>
  <div class="container">
    <Header :has-search-bar="true" />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/vars.scss";

  .container {
    min-height: 100vh;

    background-color: $background;
  }
</style>