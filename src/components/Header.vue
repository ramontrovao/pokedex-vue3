<script lang="ts" setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <RouterLink to="/" class="logo"><span>VALORANT</span> but only agents</RouterLink>
    </header>
</template>

<style lang="scss" scoped>
    @import "../assets/vars.scss";

    header {
        position: fixed;
        z-index: 50;

        width: 100%;
        height: 4.125rem;
        padding: 3rem 4rem;

        display: flex;
        justify-content: center;
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
    }
</style>