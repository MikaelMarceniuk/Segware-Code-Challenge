import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import { CustomNavbar } from '../../components'
import { useUserContext } from '../../contexts'

const AppLayout = () => {
	const { setUser } = useUserContext()
	const navigate = useNavigate()

	useEffect(() => {
		const username = localStorage.getItem('username')
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
