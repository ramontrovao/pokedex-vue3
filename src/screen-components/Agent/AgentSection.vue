<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

import { getValorantAgent } from '@/services/api';
import type { TAgent } from '@/types/Agent';

import Loading from "../../components/Loading.vue"

type TAgentRouteParams = {
    id: string;
}

const route = useRoute()
const { id } = route.params as TAgentRouteParams

const agent: Ref<{ status: number, data: TAgent } | null> = ref(null)

const fetchAgent = async () => {
    try {
        const agentData = await getValorantAgent(id)

        agent.value = agentData.data
    } catch (err) {
        console.log(err)
    }
}

onMounted(fetchAgent)
</script>

<template>
    <section v-if="agent?.data">
        <p class="data">
            {{ agent?.data }}
        </p>
    </section>

    <section v-else class="loading-section">
        <Loading />
    </section>
</template>

<style lang="scss">
    .data {
        color: #FAFAFA
    }

    .loading-section {
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>