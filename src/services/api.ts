import { api } from "./axios";

import type { TAgent } from "@/types/Agent";

export type TAgentsAPIResponse = {
  status: number;
  data: TAgent[];
};

export type TAgentAPIResponse = {
  status: number;
  data: TAgent;
};

export const getValorantAgents = async (): Promise<{
  data: TAgentsAPIResponse;
}> => {
  const agents: { data: TAgentsAPIResponse } = await api.get("/agents", {
    params: {
      language: "pt-BR",
      isPlayableCharacter: true,
    },
  });

  return agents;
};

export const getValorantAgent = async (
  agentUUID: string
): Promise<{
  data: TAgentAPIResponse;
}> => {
  const agent: { data: TAgentAPIResponse } = await api.get(
    `/agents/${agentUUID}`,
    {
      params: {
        language: "pt-BR",
        isPlayableCharacter: true,
      },
    }
  );

  return agent;
};
