import { atom, useAtom } from "jotai"
import { User } from "../types"

export const notificationCountAtom = atom(10)

export const userDetailsAtom = atom<User>({
	firstName: "John",
	lastName: "Doe",
	email: "John@Doe.com",
	id: 1,
})
