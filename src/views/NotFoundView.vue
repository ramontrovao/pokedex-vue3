<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1>404 - Não encontrado ;(</h1>
    <RouterLink to="/">Voltar</RouterLink>
  </main>
</template>

<style lang="scss" scoped>
  @import "../assets/vars.scss";

  main {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        color: $text-color;
    }

    a {
        font-size: $text-md;
    }
  }
</style>
