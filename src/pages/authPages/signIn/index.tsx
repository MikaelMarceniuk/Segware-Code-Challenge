import { Button, Col, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style.css'

const SignInPage = () => {
	return (
		<Container>
			<h1 className="form_title">Sign in</h1>
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

			<Col className="form_link">
				<Link to="/auth/sign-up">Dont have an account?</Link>
			</Col>

			<div className="d-grid">
				<Button variant="primary">Sign in</Button>
			</div>
		</Container>
	)
}

export default SignInPage
