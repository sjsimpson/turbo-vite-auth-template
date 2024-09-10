import { AppRouter } from "@turbo-vite-auth-template/api/router";
import { createTRPCClient, httpLink } from "@trpc/client";

import { API_HOST, API_PORT, TRPC_PREFIX } from "./configs";

export const api = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: `${API_HOST}:${API_PORT}${TRPC_PREFIX}`,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: "include",
        });
      },
    }),
  ],
});
