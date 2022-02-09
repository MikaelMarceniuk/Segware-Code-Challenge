import { Container, Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { colConfig } from '..'
import '../style.css'

const SignUpPage = () => {
	return (
		<Container>
			<h1 className="form_title">Sign up</h1>
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

			{/* Confirm Password */}
			<Col lg={colConfig}>
				<Form.Label>Confirm your password</Form.Label>
				<Form.Control type="password" />
			</Col>

			<Col lg={colConfig} className="form_link">
				<Link to="/auth/sign-in">Already has an account?</Link>
			</Col>

			<Col lg={colConfig} className="d-grid">
				<Button variant="primary">Sign Up</Button>
			</Col>
		</Container>
	)
}

export default SignUpPage
