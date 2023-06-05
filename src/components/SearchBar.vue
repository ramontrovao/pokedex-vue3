<script lang="ts" setup>
    import { searchQ } from "../shared/searchQ"

    const handleSubmit = (e: Event) => {
        e.preventDefault()

        alert("Em desenvolvimento :v")
    }
</script>

<template>
  <form
    class="search-form"
    @submit="handleSubmit"
  >
    <input
      :value="searchQ.text"
      placeholder="Pesquise seu agente"
      type="text"
      class="search-input"
      @input="e => searchQ.text = (e.target as HTMLInputElement)?.value"
    >

    <button
      type="submit"
      class="search-button"
    >
      <img
        src="/search-svg.svg"
        alt=""
      >
    </button>
  </form>
</template>

<style lang="scss">
    @import "../assets/vars.scss";

    .search-form {
        width: 100%;
        max-width: 25rem;
        height: 2.5rem;

        display: flex;
        gap: 0.25rem;

        background: $gray-100;
        border-radius: 8px;
    }

    .search-input {
        padding: 1rem;

        flex: 1;

        border: 0;
        outline: none;
        background: transparent;
    }

    .search-button {
        width: 3rem;

        text-align: center;
        background: #FFF;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border: 0;

        img {
            width: 1rem;
            height: 1rem;
        }

        &:hover {
            cursor: pointer;
        }
    }
</style>