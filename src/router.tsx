import { Route, Routes } from 'react-router-dom'
import { IPage } from './@types'
import { ELayout, layouts } from './layouts'
import pages from './pages'

const Router = () => {
	const filterPagesByLayout = (layout: ELayout) => {
		return pages.filter((page) => page.layout == layout)
	}

	const mapPages = (page: IPage, i: number) => {
		return <Route key={i} path={page.path} element={<page.component />} />
	}

	return (
		<Routes>
			{layouts.map((layout, i) => (
				<Route key={i} path={layout.path} element={<layout.component />}>
					{filterPagesByLayout(layout.identifier).map(mapPages)}
				</Route>
			))}
		</Routes>
	)
}

export default Router
