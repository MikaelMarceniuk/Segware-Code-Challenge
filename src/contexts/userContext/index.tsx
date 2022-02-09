import { createContext, Dispatch, useContext, useState } from 'react'

interface IUser_Context {
	user: string | undefined
	setUser: Dispatch<React.SetStateAction<string | undefined>>
	signOut: () => void
}

const userContext = createContext({} as IUser_Context)

export const useUserContext = () => useContext(userContext)

const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<string | undefined>(undefined)

	const signOut = () => {
		localStorage.clear()
		setUser(undefined)
	}

	return (
		<userContext.Provider value={{ user, setUser, signOut }}>
			{children}
		</userContext.Provider>
	)
}

export default UserProvider
