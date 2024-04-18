import axios from "axios"
const baseURL = "http://localhost:4000"
const instance = axios.create({ // sends cookies on each req
	withCredentials: true,
	baseURL
})

export const fetchAllExcercises = async () => {
	const res = await instance.get(`${baseURL}/api/excercises`)
	return res
}

export const fetchExcerciseDetails = async excercise => {
	const res = await instance.get(`${baseURL}/api/excercises/${excercise}`)
	return res
}

export const addExcercise = async excerciseVals => {
	const url = `${baseURL}/api/excercises/add`
	const res = await instance.post(url, excerciseVals)
	return res
}

export const postExcerciseNote = async (excercise, notes) => {
	const url = `${baseURL}/api/excercises/notes/${excercise}`
	const res = await instance.post(url, {notes})
	return res
}

export const deleteExcerciseNote = async (excercise, noteIndex) => {
	const url = `${baseURL}/api/excercises/notes/${excercise}/${noteIndex}`
	const res = await instance.delete(url)
	return res
}