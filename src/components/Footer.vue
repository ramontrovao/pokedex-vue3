<script lang="ts" setup></script>

<template>
    <footer>
        <span>Feito com &hearts; por Ramon Pinheiro</span>
    </footer>
</template>

<style lang="scss" scoped>
    @import '../assets/vars.scss';

    footer {
        height: 4.125rem;
        padding: 0rem 4rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $background;

        span {
            color: $text-color;
        }
    }
</style>