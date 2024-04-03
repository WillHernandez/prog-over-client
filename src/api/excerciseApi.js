import axios from "axios"

export const fetchAllExcercises = async () => {
	const res = await axios('http://localhost:4000/api/excercises')
	return res
}

export const fetchExcerciseDetails = async (excercise) => {
	const res = await axios(`http://localhost:4000/api/excercises/${excercise}`)
	return res
}

export const addExcercise = async (excerciseVals) => {
	const url = `http://localhost:4000/api/excercises`
	const res = await axios.post(url, excerciseVals)
	return res
}

export const postExcerciseNote = async (excercise, notes) => {
	const url = `http://localhost:4000/api/excercises/notes/${excercise}`
	const res = await axios.post(url, {notes})
	return res
}