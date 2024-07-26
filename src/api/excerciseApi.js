import axios from "axios"
const baseURL = "http://localhost:4000"
const instance = axios.create({
	withCredentials: true,
	baseURL,
	host : null
})

export const fetchAllExcercises = async () => {
	const res = await instance.get(`${baseURL}/api/excercises`)
	return res
}

export const fetchExcercisesFiltered = async e => {
	const res = await instance.post(`${baseURL}/api/excercises/filter`, {excercises: e})
	return res
}

export const fetchExcerciseDetails = async excercise => {
	const res = await instance.get(`${baseURL}/api/excercises/${excercise}`)
	return res
}

export const fetchExcerciseCategory = async category => {
	const res = await instance.get(`${baseURL}/api/excercises/excercise/${category}`)
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

export const deleteExcercise = async excercise => {
	const url = `${baseURL}/api/excercises/${excercise}`
	const res = await instance.delete(url)
	return res
}

export const deleteExcerciseNote = async (excercise, noteIndex) => {
	const url = `${baseURL}/api/excercises/notes/${excercise}/${noteIndex}`
	const res = await instance.delete(url)
	return res
}