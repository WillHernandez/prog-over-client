import axios from "axios"
const baseURL = "http://localhost:4000"
const instance = axios.create({ // sends cookies on each req
	withCredentials: true,
	baseURL,
	host : null
})

export const fetchMesos = async () => {
	const res = await instance.get(`${baseURL}/api/mesos`)
	return res
}