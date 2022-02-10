import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import { ELocalStorageKeys } from '../../@types'
import { CustomNavbar } from '../../components'
import { useUserContext } from '../../contexts'

const AppLayout = () => {
	const { setUser } = useUserContext()
	const navigate = useNavigate()

	useEffect(() => {
		const username = localStorage.getItem(ELocalStorageKeys.USERNAME)
		username ? setUser(username) : navigate('/auth/sign-in')
	}, [])

	return (
		<Container fluid>
			<Row>
				<CustomNavbar />
			</Row>
			<Outlet />
		</Container>
	)
}

export default AppLayout
