import { Button, Col, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { colConfig } from '..'
import '../style.css'

const SignInPage = () => {
	return (
		<Container fluid>
			<h1 className="form_title">Sign in</h1>
			{/* Email */}
			<Col lg={colConfig}>
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" />
			</Col>

			{/* Password */}
			<Col lg={colConfig}>
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" />
			</Col>

			<Col lg={colConfig} className="form_link">
				<Link to="/auth/sign-up">Dont have an account?</Link>
			</Col>

			<Col lg={colConfig} className="d-grid">
				<Button variant="primary">Sign in</Button>
			</Col>
		</Container>
	)
}

export default SignInPage
