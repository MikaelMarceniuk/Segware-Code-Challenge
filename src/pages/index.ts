import { ELayout } from '../layouts'
import NotFoundPage from './NotFound'
import { SignInPage, SignUpPage } from './authPages'

const pages = [
	{ component: SignInPage, layout: ELayout.Auth, path: 'sign-in' },
	{ component: SignUpPage, layout: ELayout.Auth, path: 'sign-up' },
	{ component: NotFoundPage, layout: ELayout.App, path: '*' },
]

export default pages
