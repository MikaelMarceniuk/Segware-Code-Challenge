import { createContext, Dispatch, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ELocalStorageKeys } from '../../@types'

interface IUser_Context {
	user: string | undefined
	setUser: Dispatch<React.SetStateAction<string | undefined>>
	signOut: () => void
}

const userContext = createContext({} as IUser_Context)

export const useUserContext = () => useContext(userContext)

const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<string | undefined>(undefined)
	const navigate = useNavigate()

	const signOut = () => setUser(undefined)

	useEffect(() => {
		if (user) return

		localStorage.clear()
		navigate('/auth/sign-in')
	}, [user])

	useEffect(() => {
		if (!localStorage.getItem(ELocalStorageKeys.ACESS_TOKEN)) setUser(undefined)
	}, [localStorage.getItem(ELocalStorageKeys.ACESS_TOKEN)])

	return (
		<userContext.Provider value={{ user, setUser, signOut }}>
			{children}
		</userContext.Provider>
	)
}

export default UserProvider
