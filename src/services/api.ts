import { api } from "./axios";

import type { TAgentAPIResponse } from "@/types/Agent";

export const getValorantAgents = async (): Promise<{
  data: TAgentAPIResponse;
}> => {
  const agents: { data: TAgentAPIResponse } = await api.get("/agents", {
    params: {
      language: "pt-BR",
    },
  });

  return agents;
};
