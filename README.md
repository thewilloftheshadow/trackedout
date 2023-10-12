# Tracked Out

This is the official website for The Dungeon Archive (Tracked Out).

Someone should write something better here!

## Layout

This site is a next.js app built in a monorepo.

-   `/apps/web` contains the main website
    -   Files under `/apps/web/src/app` are the main pages. These are routed based on the file system.
        -   For example, `/apps/web/src/app/page.tsx` is located at example.com. `/apps/web/src/app/demo/page.tsx` is located at example.com/demo
    -   Other components for the site's UI are located under `/apps/web/src/components`
-   `/packages/api` contains the backend GraphQL api using tRPC
    -   It is written as simple JS functions that are automatically converted to a GraphQL API.
    -   The main spreadsheet functions are located at `/packages/api/src/router/spreadsheet.ts`
-   `/packages/store` contains the state management that is used for filtering and data display
