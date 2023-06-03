<script lang="ts" setup>
    import PokeCard from "../../components/PokeCard.vue"
</script>

<template>
    <section>
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
        <PokeCard :pokemon-name="'Bulbasaur'" :pokemon-image-src="'/bulbasaur.svg'"  />
    </section>
</template>

<style lang="scss" scoped>
    section {
        margin: auto;
        max-width: 1300px;
        padding-top: 8.125rem;

        width: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 3.125rem;
    }
</style>