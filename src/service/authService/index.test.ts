import authService from '.'
import { ELocalStorageKeys } from '../../@types'

describe('AuthService', () => {
	const credentials = {
		username: 'Morsik779',
		password: 'Limbo779',
	}

	it('SignIn', async () => {
		// Happy Scenario
		await authService.SignIn(credentials)
		expect(localStorage.getItem(ELocalStorageKeys.USERNAME)).toBe(
			credentials.username
		)
		expect(localStorage.getItem(ELocalStorageKeys.ACESS_TOKEN)).toBeTruthy()

		localStorage.clear()

		// Unhapy Scenario
		credentials.password = '123'
		const { isSuccess } = await authService.SignIn(credentials)
		expect(isSuccess).toBe(false)
	})
})
