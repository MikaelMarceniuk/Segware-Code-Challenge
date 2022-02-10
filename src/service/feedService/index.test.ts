import feedService from '.'
import { authService } from '..'
import { IFeed } from './type'

describe('Feed Service', () => {
	let feeds: IFeed[] = []
	beforeAll(async () => {
		await authService.SignIn({ username: 'Morsik779', password: 'Limbo779' })
	})

	it('getFeed', async () => {
		const resp = await feedService.getFeed()
		if (resp) {
			expect(resp.length).toBeGreaterThan(0)
			feeds = resp
		}
	})

	it('submitFeed', async () => {
		const { isSuccess } = await feedService.submitFeed({
			content: 'This post was created by itself :)',
		})
		expect(isSuccess).toBe(true)
	})

	it('reactFeed', async () => {
		const { isSuccess } = await feedService.reactFeed({
			feedId: feeds[0].id,
			like: true,
			love: true,
		})
		expect(isSuccess).toBe(true)
	})
})
