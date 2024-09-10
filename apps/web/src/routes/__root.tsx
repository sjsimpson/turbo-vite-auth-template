// import { Toaster } from "@turbo-vite-auth-template/ui";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { useAuth, type AuthContext } from "../auth";

export const Route = createRootRouteWithContext<{
  auth: AuthContext;
}>()({
  component: App,
});

function App() {
  const auth = useAuth();
  return (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/new-user" className="[&.active]:font-bold">
          New User
        </Link>
        {auth.user && (
          <Link to="/protected-route" className="[&.active]:font-bold">
            Protected Route
          </Link>
        )}
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
