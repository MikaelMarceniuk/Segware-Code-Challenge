import { Container, Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style.css'

const SignUpPage = () => {
	return (
		<Container>
			<h1 className="form_title">Sign up</h1>
			{/* Email */}
			<Form.Group className="mb-3">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" />
			</Form.Group>

			{/* Password */}
			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>

			{/* Confirm Password */}
			<Form.Group className="mb-3">
				<Form.Label>Confirm your password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>

			<Col className="form_link">
				<Link to="/auth/sign-in">Already has an account?</Link>
			</Col>

			<div className="d-grid">
				<Button variant="primary">Sign Up</Button>
			</div>
		</Container>
	)
}

export default SignUpPage
