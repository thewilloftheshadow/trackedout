import { mountStoreDevtool } from "simple-zustand-devtools"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import type { Class, Kid } from "@tda/db"

export interface PendingRegistration {
	kidId: Kid["id"]
	classId: Class["id"]
}

export const name = "store"

interface StoreState {
	pendingRegistrations: PendingRegistration[]
	setPendingRegistrations: (to: PendingRegistration[]) => void
}

export const useRegistrationStore = create<StoreState>()(
	persist(
		(set) => ({
			pendingRegistrations: [],
			setPendingRegistrations: (to) => set({ pendingRegistrations: to }),
		}),
		{
			name: "registration-store",
			storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
			partialize: (state) => ({
				pendingRegistrations: state.pendingRegistrations,
			}),
		},
	),
)

if (process.env.NODE_ENV === "development") {
	mountStoreDevtool("Store", useRegistrationStore)
}
