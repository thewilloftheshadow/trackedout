import { JWT } from "google-auth-library"
import { GoogleSpreadsheet } from "google-spreadsheet"

import { env } from "./env"

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const serviceAccountAuth = new JWT({
	email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
	key: process.env.GOOGLE_PRIVATE_KEY!.split(String.raw`\n`).join("\n"),
	scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
})

export const doc = new GoogleSpreadsheet(
	"1hycNi55OZfTon1S__Dd-E2a99uT6Y9OT0fFnl_gIbr0",
	serviceAccountAuth,
)
