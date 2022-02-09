import { ELayout } from '../layouts'
import { SignInPage, SignUpPage } from './authPages'
import NotFoundPage from './notFound'
import HomePage from './home'

const pages = [
	{ component: SignInPage, layout: ELayout.Auth, path: 'sign-in' },
	{ component: SignUpPage, layout: ELayout.Auth, path: 'sign-up' },
	{ component: NotFoundPage, layout: ELayout.App, path: '*' },
	{ component: HomePage, layout: ELayout.App, path: '' },
]

export default pages
