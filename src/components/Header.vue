<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import SearchBar from "../components/SearchBar.vue"

export interface IHeaderProps {
    hasSearchBar?: boolean;
}

withDefaults(defineProps<IHeaderProps>(), {
    hasSearchBar: false,
})
</script>

<template>
  <header>
    <RouterLink
      to="/"
      class="logo"
    >
      <span>VALORANT</span> agents
    </RouterLink>

    <SearchBar v-if="hasSearchBar" />
  </header>
</template>

<style lang="scss" scoped>
    @import "../assets/vars.scss";

    header {
        position: fixed;
        z-index: 50;

        min-height: 4.125rem;
        width: 100%;
        padding: 1.5rem 5rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: $background;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        .logo {
            text-align: center;
            text-decoration: none;
            font-size: $text-lg;
            font-weight: bold;
            color: $text-color;
            transition: 0.4s;

            span {
                color: $red-400;
            }

            &:hover {
                opacity: 0.8;
            }
        }

        @media (max-width: 768px) {
            padding: 1.5rem;

            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
</style>