import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts'
import Router from './router'

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Router />
			</UserProvider>
		</BrowserRouter>
	)
}

export default App
