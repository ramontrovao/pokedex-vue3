<script lang="ts" setup>
    export interface IAgentCardProps {
        agentName: string;
        agentImageSrc: string;
        agentRole: string;
    }

    defineProps<IAgentCardProps>()
</script>

<template>
    <div class="agent-card">
        <div class="agent-infos">
            <strong>{{ agentName }}</strong>

            <div class="agent-roles">
                <div>
                    <p>{{ agentRole }}</p>
                </div>
            </div>
        </div>

        <img :src="agentImageSrc" class="agent-img" alt="" />
    </div>
</template>

<style lang="scss" scoped>
    @import "../assets/vars.scss";

    .agent-card {
        min-width: 20rem;
        height: 10rem;
        padding: 2rem 0 2rem 2rem;

        background: $gray-100;
        border-radius: 16px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        strong {
            font-size: $text-md;
        }
    }

    .agent-infos {
        max-height: 7rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
    }

    .agent-img {
        max-width: 10rem;
        max-height: 10rem;
    }
</style>