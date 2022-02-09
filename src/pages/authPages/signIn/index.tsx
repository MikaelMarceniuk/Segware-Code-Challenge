import { useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { colConfig, EForm_Keys } from '..'
import { authService } from '../../../service'
import '../style.css'

const defaultValues = {
	username: '',
	password: '',
}

const SignInPage = () => {
	const [formValues, setFormValues] = useState(defaultValues)
	const navigate = useNavigate()

	const handleChange = (key: EForm_Keys) => (e: any) => {
		setFormValues({ ...formValues, [key]: e.target.value })
	}

	const handleSubmit = async () => {
		const { username, password } = formValues
		const emptyMsg = ' must not be empty'
		const atLeastMsg = ' must have at least 6 characters'
		let isValid = true

		const sendNotValidMessage = (msg: string) => {
			isValid = false
			alert(msg)
		}

		//Username validation
		if (username == '') return sendNotValidMessage('Username' + emptyMsg)

		if (username.length < 6) return sendNotValidMessage('Username' + atLeastMsg)

		//Password Validation
		if (password == '') return sendNotValidMessage('Password' + emptyMsg)

		if (password.length < 6) return sendNotValidMessage('Password' + atLeastMsg)

		if (isValid) {
			const { isSuccess } = await authService.SignIn({ ...formValues })
			if (isSuccess) navigate('/')
		}
	}

	return (
		<Container fluid>
			<h1 className="form_title">Sign in</h1>
			{/* Email */}
			<Col lg={colConfig}>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type="text"
					onChange={handleChange(EForm_Keys.USERNAME)}
					value={formValues.username}
				/>
			</Col>

			{/* Password */}
			<Col lg={colConfig}>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					onChange={handleChange(EForm_Keys.PASSWORD)}
					value={formValues.password}
				/>
			</Col>

			<Col lg={colConfig} className="form_link">
				<Link to="/auth/sign-up">Dont have an account?</Link>
			</Col>

			<Col lg={colConfig} className="d-grid">
				<Button variant="primary" onClick={handleSubmit}>
					Sign in
				</Button>
			</Col>
		</Container>
	)
}

export default SignInPage
