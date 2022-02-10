import { toast } from 'react-toastify'
import { axiosInstance } from '../../libs'
import utils from '../../utils'
import { IFeed, IReactFeed, ISubmitFeed } from './type'

export default {
	getFeed: async () => {
		try {
			return await (
				await axiosInstance.get<IFeed[]>('/feeds')
			).data
		} catch (e) {
			toast.error('Error in getFeed')
			console.log(e)
		}
	},
	submitFeed: async (body: ISubmitFeed) => {
		try {
			await axiosInstance.post('/feed', body)
			return utils.apiResp(true)
		} catch (e) {
			toast.error('Error in submitFeed')
			console.log(e)
			return utils.apiResp(false)
		}
	},
	reactFeed: async (body: IReactFeed) => {
		try {
			await axiosInstance.post('/reaction', body)
			return utils.apiResp(true)
		} catch (e) {
			toast.error('Error in reactFeed')
			console.log(e)
			return utils.apiResp(false)
		}
	},
}
