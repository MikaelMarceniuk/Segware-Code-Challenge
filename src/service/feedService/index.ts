import { axiosInstance } from '../../libs'
import utils from '../../utils'
import { IFeed, IReactFeed, ISubmitFeed, IUpvoteFeed } from './type'

export default {
	getFeed: async () => {
		try {
			return await (
				await axiosInstance.get<IFeed[]>('/feeds')
			).data
		} catch (e) {
			alert('Error in getFeed')
			console.log(e)
		}
	},
	submitFeed: (content: ISubmitFeed) => {
		try {
			console.log(content)
		} catch (e) {
			alert('Error in submitFeed')
			console.log(e)
		}
	},
	reactFeed: async (value: IReactFeed) => {
		try {
			await axiosInstance.post('/reaction', value)
			return utils.apiResp(true)
		} catch (e) {
			alert('Error in upvoteFeed')
			console.log(e)
			return utils.apiResp(false)
		}
	},
	upvoteFeed: (value: IUpvoteFeed) => {
		try {
			console.log(value)
		} catch (e) {
			alert('Error in upvoteFeed')
			console.log(e)
		}
	},
}
