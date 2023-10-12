import { doc } from "../doc"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const spreadsheetRouter = createTRPCRouter({
	getSheets: publicProcedure.query(async () => {
		await doc.loadInfo()
		return doc.sheetsByIndex.map(
			(x) => `${x.a1SheetName} ${x.sheetId} - ${x.rowCount} rows`,
		)
	}),
})
