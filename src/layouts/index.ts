import { ILayout } from '../@types'
import AppLayout from './appLayout'
import AuthLayout from './authLayout'

export enum ELayout {
	App,
	Auth,
}

export const layouts: ILayout[] = [
	{ identifier: ELayout.App, path: '/', component: AppLayout },
	{ identifier: ELayout.Auth, path: '/auth', component: AuthLayout },
]
