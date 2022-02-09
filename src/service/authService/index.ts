import { axiosInstance } from '../../libs'
import utils from '../../utils'
import { ISignUp, IUser } from './types'

export default {
	SignUp: async (value: ISignUp) => {
		delete value['confirmPassword']
		localStorage.removeItem('jwtToken')

		try {
			await axiosInstance.post('/sign-up', value)
			alert('Succefully in SignUp')
		} catch (e) {
			alert('Error in SignUp')
			console.log(e)
		}
	},
	SignIn: async (value: IUser) => {
		try {
			const { data } = await axiosInstance.post('/sign-in', value)
			localStorage.setItem('jwtToken', data)
			return utils.apiResp(true)
		} catch (e) {
			alert('Error in SignUp')
			console.log(e)
			return utils.apiResp(false)
		}
	},
}
