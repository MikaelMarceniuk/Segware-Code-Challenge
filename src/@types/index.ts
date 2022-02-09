import { ELayout } from '../layouts'

export interface ILayout {
	identifier: ELayout
	path: string
	component: React.FC
}

export interface IPage {
	layout: ELayout
	path: string
	component: React.FC
}
