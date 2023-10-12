import { parseEnv } from "znv"
import { z } from "zod"

export const env = parseEnv(process.env, {
	GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string().email(),
	GOOGLE_PRIVATE_KEY: z.string(),
})
