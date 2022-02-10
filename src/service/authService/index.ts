import { toast } from 'react-toastify'
import { ELocalStorageKeys } from '../../@types'
import { axiosInstance } from '../../libs'
import utils from '../../utils'
import { ISignUp, IUser } from './types'

export default {
	SignUp: async (value: ISignUp) => {
		delete value['confirmPassword']
		localStorage.clear()

		try {
			await axiosInstance.post('/sign-up', value)
			toast.success('Succefully in SignUp')
		} catch (e) {
			toast.error('Error in SignUp')
			console.log(e)
		}
	},
	SignIn: async (value: IUser) => {
		try {
			const { data } = await axiosInstance.post('/sign-in', value)

			localStorage.setItem(ELocalStorageKeys.USERNAME, value.username)
			localStorage.setItem(ELocalStorageKeys.ACESS_TOKEN, data)

			return utils.apiResp(true)
		} catch (e) {
			toast.error('Error in SignUp')
			return utils.apiResp(false)
		}
	},
}
