import { Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { CustomNavbar } from '../../components'

const AppLayout = () => {
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
