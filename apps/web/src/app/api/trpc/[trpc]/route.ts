import type { NextRequest } from "next/server"
import { appRouter, createTRPCContext } from "@tda/api"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

export const runtime = "edge"

const handler = (req: NextRequest) =>
	fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		createContext: () => createTRPCContext({ req }),
		onError:
			process.env.NODE_ENV === "development"
				? ({ path, error }) => {
						console.error(
							`❌ tRPC failed on ${path ?? "<no-path>"}: ${
								error.message
							}`,
						)
				  }
				: undefined,
	})

export { handler as GET, handler as POST }
