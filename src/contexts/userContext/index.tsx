import { createContext, Dispatch, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

	useEffect(() => {
		const username = localStorage.getItem('username')
		username ? setUser(username) : navigate('/auth/sign-in')
	}, [user])

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
