import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import './index.css'

const AuthLayout = () => {
	return (
		<Container className="auth_container" fluid>
			<Row>
				<Col className="auth_content">
					<BsFillHandThumbsUpFill />
					<h1>Segware Code Challenge</h1>
					<p>Upvotes app</p>
				</Col>
				<Col md={7} lg={8}>
					<Outlet />
				</Col>
			</Row>
		</Container>
	)
}

export default AuthLayout
