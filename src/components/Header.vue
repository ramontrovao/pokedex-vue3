<script lang="ts" setup>
</script>

<template>
    <header>
        <h1>Valorant Agents</h1>
    </header>
</template>

<style lang="scss" scoped>
    @import "../assets/vars.scss";

    header {
        position: fixed;

        width: 100%;
        height: 4.125rem;
        padding: 3rem 4rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $background;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        h1 {
            text-align: center;
            color: $text-color;
        }
    }
</style>