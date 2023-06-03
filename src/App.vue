<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <div class="container">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  @import "./assets/vars.scss";

  .container {
    min-height: 100vh;

    background-color: $background;
  }
</style>
