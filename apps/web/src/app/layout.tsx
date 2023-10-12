import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "~/styles/globals.css"

import { headers } from "next/headers"

import { cn } from "~/lib/utils"
import { TRPCReactProvider } from "../trpc/react"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
})

export const metadata: Metadata = {
	title: "Tracked Out",
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
	modal: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={cn("max-w-full", inter.className)}>
				<TRPCReactProvider headers={headers()}>
					<div className="pt-3">{children}</div>
				</TRPCReactProvider>
			</body>
		</html>
	)
}
