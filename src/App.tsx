import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AllProviders from './contexts'
import Router from './router'

const App = () => {
	return (
		<BrowserRouter>
			<AllProviders>
				<Router />
				<ToastContainer />
			</AllProviders>
		</BrowserRouter>
	)
}

export default App
