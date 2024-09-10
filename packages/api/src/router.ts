import { router } from "./context";
import { authRouter } from "./routes/auth";

export const appRouter = router({
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
