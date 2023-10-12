import { api } from "~/trpc/server"

export default async function page() {
	const sheets = await api.spreadsheet.getSheets.query()
	return sheets ? (
		<div className="container mx-auto place-content-center px-20">
			<div className="text-xl font-bold">Sheets</div>
			{sheets.map((sheet, i) => (
				<div key={i} className="text-sm">
					{sheet}
				</div>
			))}
		</div>
	) : (
		"Hi"
	)
}
