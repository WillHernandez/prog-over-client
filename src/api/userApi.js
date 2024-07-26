import axios from "axios"
const baseURL = "http://localhost:4000"
const instance = axios.create({ // sends cookies on each req
	withCredentials: true,
	baseURL,
	host : null
})

export const signUp = async user => {
	const res = await instance.post(`${baseURL}/api/user/signup`, user)
	return res
}

export const signIn = async user => {
	const res = await instance.post(`${baseURL}/api/user/signin`, user)
	return res
}

export const signOut = async user => {
	const res = await instance.get(`${baseURL}/api/user/signout`, user)
	return res.data
}