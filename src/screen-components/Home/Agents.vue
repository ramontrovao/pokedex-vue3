<script lang="ts" setup>
    import { onMounted, ref, type Ref } from "vue";

    import type { TAgentAPIResponse } from "../../types/Agent";
    import { getValorantAgents } from "../../services/api"

    import AgentCard from "../../components/AgentCard.vue"

    const agents: Ref<TAgentAPIResponse | null> = ref(null)

    const fetchAgents = async () => {
        try {
            const agentsData = await getValorantAgents()

            agents.value = agentsData.data
        } catch (err) {
            console.log(err)
        }
    }

    onMounted(fetchAgents)
</script>

<template>
    <section v-if="agents?.data">
        <AgentCard v-for="agent in agents.data" :key="agent.uuid" :agent-name="agent.displayName" :agent-role="agent.role?.displayName" :agent-image-src="agent.displayIcon" />
    </section>

    <section v-else>
        <h1>Loading...</h1>
    </section>
</template>

<style lang="scss" scoped>
    .abuble {
        color: white;
    }

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