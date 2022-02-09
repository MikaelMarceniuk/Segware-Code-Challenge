import { Button, Container, Form } from 'react-bootstrap'
import './style.css'

const SignInPage = () => {
	return (
		<Container>
			<h1 className="signin_title">Sign in</h1>
			{/* Email */}
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" />
				<Form.Text className="text-muted">
					We will never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			{/* Password */}
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>

			<div className="d-grid">
				<Button variant="primary">Sign in</Button>
			</div>
		</Container>
	)
}

export default SignInPage
