import { BrowserRouter } from 'react-router-dom'
import AllProviders from './contexts'
import Router from './router'

const App = () => {
	return (
		<BrowserRouter>
			<AllProviders>
				<Router />
			</AllProviders>
		</BrowserRouter>
	)
}

export default App
