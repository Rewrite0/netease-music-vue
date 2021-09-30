import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/'

export const request = createBaseInstance()

// 创建axios实例
function createBaseInstance() {
	const instance = axios.create({
		baseURL: BASE_URL,
		timeout: 1000,
	})

	// axios响应拦截
	instance.interceptors.response.use(handleResponse, handleError)
	return instance
}

// 响应成功处理
function handleResponse(response) {
	return response.data
}

// 响应失败处理
function handleError(e) {
	confirm(e.message, '请求出错')
	throw e
}