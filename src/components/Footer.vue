<script lang="ts" setup></script>

<template>
    <footer>
        <span>Feito com &hearts; por Ramon Pinheiro</span>
    </footer>
</template>

<style lang="scss" scoped>
    @import '../assets/vars.scss';

    footer {
        width: 100%;
        max-width: 1300px;
        padding: 1.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $background;

        span {
            color: $text-color;
        }
    }
</style>