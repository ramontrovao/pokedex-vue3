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
  <section
    v-if="agent?.data"
    class="valorant-agent-section"
  >
    <div class="agent-portrait">
      <img
        :src="agent.data.fullPortrait"
        alt=""
      >
    </div>

    <div class="agent-infos">
      <header>
        <h2>
          {{ agent.data.displayName }} <img
            class="icon-small"
            :src="agent.data.displayIconSmall"
            alt=""
          >
        </h2>
        <p class="agent-role">
          {{ agent.data.role.displayName }}
        </p>
      </header>

      <main>
        <p class="agent-description">
          {{ agent.data.description }}
        </p>
      </main>

      <footer>
        <strong>Skills</strong>

        <ul>
          <li
            v-for="ability in agent.data.abilities"
            class="ability"
          >
            {{ ability.displayName }} <img
              :src="ability.displayIcon"
              class="icon-small"
              alt=""
            >
          </li>
        </ul>
      </footer>
    </div>
  </section>

  <section
    v-else
    class="loading-section"
  >
    <Loading />
  </section>
</template>

<style lang="scss">
    @import "../../assets/vars.scss";

    .valorant-agent-section {
        width: 100%;
        max-width: 1300px;
        padding: 8.125rem 1.5rem 1.5rem 1.5rem;
        margin: auto;

        display: flex;
        gap: 5rem;

        .agent-portrait {
            width: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 8px;
            overflow: hidden;
            background: linear-gradient(to right, #C61B1B, $red-400);

            img {
                max-width: 30rem;
                height: 30rem;

                transition: 0.4s;
                object-fit: cover;

                &:hover {
                    scale: 1.15;
                }
            }
        }

        .agent-infos {
            width: 50%;
            
            display: flex;
            flex-direction: column;
            gap: 2.5rem;

            h2, p, strong, .ability  {
                font-size: $text-md;
                color: $text-color;
            }

            h2 {
                font-size: $text-lg;
            }

            header {
                .agent-role {
                    margin-top: 0.25rem;

                    color: $gray-200;
                }
            }

            main {
                .agent-description {
                    font-size: $text-md;
                }
            }

            footer {
                ul {
                    margin-left: 1.25rem;
                    margin-top: 1rem;
                }
            }

            .icon-small {
                width: 1.25rem;
                height: 1.25rem;
            }
        }

        @media (max-width: 768px) {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            .agent-portrait, .agent-infos {
                width: 100%;
            }
        }
    }

    .loading-section {
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>