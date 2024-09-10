import { AppRouter } from "@turbo-vite-auth-template/api/router";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
