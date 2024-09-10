import { createFileRoute, redirect } from "@tanstack/react-router";

import { api } from "../trpc/client";

const UNAUTHORIZED = 401;

export const Route = createFileRoute("/protected-route")({
  beforeLoad: async ({ context: { auth }, location }) => {
    if (!auth.user) {
      try {
        await api.auth.signOut.mutate();
      } catch {
        throw redirect({
          code: UNAUTHORIZED,
          to: "/",
          search: {
            login: true,
            redirect: location.href,
          },
        });
      }

      throw redirect({
        code: UNAUTHORIZED,
        to: "/",
        search: {
          login: true,
          redirect: location.href,
        },
      });
    }

    try {
      await api.auth.validateSession.mutate();
    } catch (error) {
      auth.setUser(null);
      throw redirect({
        code: UNAUTHORIZED,
        to: "/",
        search: {
          login: true,
          redirect: location.href,
        },
      });
    }
  },
  component: ProtectedRoute,
});

function ProtectedRoute() {
  return <div className="p-2">PROTECTED ROUTE</div>;
}
