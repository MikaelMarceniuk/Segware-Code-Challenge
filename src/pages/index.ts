import SignInPage from './signIn'
import SignUpPage from './signUp'
import NotFoundPage from './NotFound'
import { ELayout } from '../layouts'

const pages = [
	{ component: SignInPage, layout: ELayout.Auth, path: 'sign-in' },
	{ component: SignUpPage, layout: ELayout.Auth, path: 'sign-up' },
	{ component: NotFoundPage, layout: ELayout.App, path: '*' },
]

export default pages
