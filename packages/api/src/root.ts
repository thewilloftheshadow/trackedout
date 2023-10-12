import { spreadsheetRouter } from "./router/spreadsheet"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
	spreadsheet: spreadsheetRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
