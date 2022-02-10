import UserProvider, { useUserContext } from './userContext'

const AllProviders: React.FC = ({ children }) => {
	return <UserProvider>{children}</UserProvider>
}

export default AllProviders

export { useUserContext }
