<script lang="ts" setup>
    import { onMounted, ref, type Ref } from "vue";

    import { getValorantAgents } from "../../services/api"
    import type { TAgent } from "@/types/Agent";

    import AgentCard from "../../components/AgentCard.vue"
    import Loading from "../../components/Loading.vue"

    const agents: Ref<{ status: number, data: TAgent[] } | null> = ref(null)

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
    <section class="valorant-agents-section" v-if="agents?.data">
        <AgentCard v-for="agent in agents.data" :key="agent.uuid" :agent-uuid="agent.uuid" :agent-name="agent.displayName" :agent-role="agent.role?.displayName" :agent-image-src="agent.displayIcon" />
    </section>

    <section class="loading-section" v-else>
        <Loading />
    </section>
</template>

<style lang="scss" scoped>
    .valorant-agents-section {
        margin: auto;
        max-width: 1300px;
        padding-top: 8.125rem;

        width: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 3.125rem;
    }

    .loading-section {
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>