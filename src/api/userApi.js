import axios from "axios"
const url = "http://localhost:4000/api/user"

export const signup = async user => {
	const res = await axios.post(`${url}/signup`, user)
	return res.data
}

export const signin = async user => {
	const res = await axios.post(`${url}/signin`, user)
	return res.data
}