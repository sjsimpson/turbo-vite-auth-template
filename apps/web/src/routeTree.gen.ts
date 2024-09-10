/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedRouteImport } from './routes/protected-route'
import { Route as NewUserImport } from './routes/new-user'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ProtectedRouteRoute = ProtectedRouteImport.update({
  path: '/protected-route',
  getParentRoute: () => rootRoute,
} as any)

const NewUserRoute = NewUserImport.update({
  path: '/new-user',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/new-user': {
      id: '/new-user'
      path: '/new-user'
      fullPath: '/new-user'
      preLoaderRoute: typeof NewUserImport
      parentRoute: typeof rootRoute
    }
    '/protected-route': {
      id: '/protected-route'
      path: '/protected-route'
      fullPath: '/protected-route'
      preLoaderRoute: typeof ProtectedRouteImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/new-user': typeof NewUserRoute
  '/protected-route': typeof ProtectedRouteRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/new-user': typeof NewUserRoute
  '/protected-route': typeof ProtectedRouteRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/new-user': typeof NewUserRoute
  '/protected-route': typeof ProtectedRouteRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/new-user' | '/protected-route'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/new-user' | '/protected-route'
  id: '__root__' | '/' | '/new-user' | '/protected-route'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NewUserRoute: typeof NewUserRoute
  ProtectedRouteRoute: typeof ProtectedRouteRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NewUserRoute: NewUserRoute,
  ProtectedRouteRoute: ProtectedRouteRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/new-user",
        "/protected-route"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/new-user": {
      "filePath": "new-user.tsx"
    },
    "/protected-route": {
      "filePath": "protected-route.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
