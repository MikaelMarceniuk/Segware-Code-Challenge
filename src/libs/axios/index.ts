import axios from 'axios'
import { ELocalStorageKeys } from '../../@types'

const axiosInstance = axios.create({
	baseURL: 'https://segware-book-api.segware.io/api',
	timeout: 1000,
})

axiosInstance.interceptors.request.use((cfg) => {
	const token = localStorage.getItem(ELocalStorageKeys.ACESS_TOKEN)
	if (token && cfg.headers) cfg.headers['authorization'] = 'Bearer ' + token

	return cfg
})

axiosInstance.interceptors.response.use((resp) => {
	const { status } = resp
	if (status == 401) localStorage.clear()

	return resp
})

export default axiosInstance
