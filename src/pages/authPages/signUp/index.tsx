import { ChangeEvent, useState } from 'react'
import { Container, Form, Button, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { colConfig, EForm_Keys } from '..'
import { authService } from '../../../service'
import '../style.css'

const defaultValues = {
	username: '',
	password: '',
	confirmPassword: '',
}

const SignUpPage = () => {
	const [formValues, setFormValues] = useState(defaultValues)
	const navigate = useNavigate()

	const handleChange =
		(key: EForm_Keys) => (e: ChangeEvent<HTMLInputElement>) => {
			setFormValues({ ...formValues, [key]: e.target.value })
		}

	const handleSubmit = async () => {
		const { username, password, confirmPassword } = formValues
		const emptyMsg = ' must not be empty'
		const atLeastMsg = ' must have at least 6 characters'
		let isValid = true

		const sendNotValidMessage = (msg: string) => {
			isValid = false
			toast.error(msg)
		}

		//Username validation
		if (username == '') return sendNotValidMessage('Username' + emptyMsg)

		if (username.length < 6) return sendNotValidMessage('Username' + atLeastMsg)

		//Password Validation
		if (password == '') return sendNotValidMessage('Password' + emptyMsg)

		if (password.length < 6) return sendNotValidMessage('Password' + atLeastMsg)

		//Confirm Password Validation
		if (confirmPassword == '')
			return sendNotValidMessage('Confirm Password' + emptyMsg)

		if (confirmPassword != password)
			return sendNotValidMessage('Passwords does not match')

		if (isValid) {
			const { isSuccess } = await authService.SignUp({ ...formValues })
			if (isSuccess) {
				setFormValues(defaultValues)
				navigate('/auth/sign-in')
			}
		}
	}

	return (
		<Container>
			<h1 className="form_title">Sign up</h1>
			{/* Email */}
			<Col lg={colConfig}>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type="text"
					onChange={handleChange(EForm_Keys.USERNAME)}
					value={formValues[EForm_Keys.USERNAME]}
				/>
			</Col>

			{/* Password */}
			<Col lg={colConfig}>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					onChange={handleChange(EForm_Keys.PASSWORD)}
					value={formValues[EForm_Keys.PASSWORD]}
				/>
			</Col>

			{/* Confirm Password */}
			<Col lg={colConfig}>
				<Form.Label>Confirm your password</Form.Label>
				<Form.Control
					type="password"
					onChange={handleChange(EForm_Keys.CONFIRM_PASSWORD)}
					value={formValues[EForm_Keys.CONFIRM_PASSWORD]}
				/>
			</Col>

			<Col lg={colConfig} className="form_link">
				<Link to="/auth/sign-in">Already has an account?</Link>
			</Col>

			<Col lg={colConfig} className="d-grid">
				<Button variant="primary" onClick={handleSubmit}>
					Sign Up
				</Button>
			</Col>
		</Container>
	)
}

export default SignUpPage
