<script lang="ts" setup>
    export interface IPokeCardProps {
        pokemonName: string;
        pokemonImageSrc: string;
    }

    defineProps<IPokeCardProps>()
</script>

<template>
    <div class="poke-card">
        <div>
            <strong>{{ pokemonName }}</strong>
        </div>

        <img :src="pokemonImageSrc" class="pokemon-img" alt="" />
    </div>
</template>

<style lang="scss" scoped>
    @import "../assets/vars.scss";

    .poke-card {
        max-width: 17.5rem;
        max-height: 10rem;
        padding: 3rem;

        background-color: $gray-100;
        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.688rem;

        strong {
            font-size: $text-md;
        }
    }

    .pokemon-img {
        width: 8.75rem;
        height: 8.75rem;
        margin-right: -6rem;
    }
</style>