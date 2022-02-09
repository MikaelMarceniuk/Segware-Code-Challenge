import { axiosInstance } from '../../libs'
import { ISignUp } from './types'

export default {
	SignUp: async (value: ISignUp) => {
		delete value['confirmPassword']

		try {
			await axiosInstance.post('/sign-up', value)
			alert('Succefully in SignUp')
		} catch (e) {
			alert('Error in SignUp')
			console.log(e)
		}
	},
	SignIn: () => {
		console.log('AuthService SignIn')
	},
}
