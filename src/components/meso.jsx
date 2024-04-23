import { useState, useEffect } from "react";
import Select from 'react-select'
import ResponsiveAppBar from './appbar';
import BottomNav from './bottomNav';
import LinkedFieldsRowEditing from "./editableRows";
import { fetchExcercisesByGroup, fetchExcercisesFiltered } from "../api/excerciseApi";

export default function MesoForm() {
	const [mesoDays, setMesoDays] = useState('')
	const [muscleGroups, setMuscleGroups] = useState([])
	const [trainingStyle, setTrainingStyle] = useState('')

	useEffect(() => {
		const getMuscleGroups = async () => {
			const res = await fetch('http://localhost:4000/api/excercises/muscles')
			const data = await res.json()
			const options = []
			data.forEach((mg, i) => {
				options[i] = {value: mg.primary_muscle.toLowerCase(), label: mg.primary_muscle}
			})
			setMuscleGroups(options)
		}
		getMuscleGroups()
	},[])

	return(
		<>
		<ResponsiveAppBar />
		<form>
			<RadioMesoComponent setMesoDays={setMesoDays}/>
			<TrainingStyleComponent setTrainingStyle={setTrainingStyle}/>	
			{/* <RenderMesoTemplate muscleGroups={muscleGroups}/> */}
		</form>
		{/* <MesoStack mesoDays={mesoDays}/> */}
		<LinkedFieldsRowEditing days={mesoDays}/>
		<BottomNav />
		</>
	)
}

const RadioMesoComponent = ({setMesoDays}) => {
	const btns = ['2', '3', '4', '5', '6']
	return(
		<fieldset onChange={e => setMesoDays(e.target.value)} className='flex-container' style={{margin: '10px', padding: '10px', textAlign: 'center', fontSize: '18px'}}>
  	<legend>Days per week:</legend>
			<div style={{display: 'flex', justifyContent: "space-around"}}>
				{btns.map((btn, i) => 
						<div key={i}>
    					<input type="radio" id={btn} name="mesoLength" value={btn} />
    					<label>&nbsp;{btn}</label>
						</div>
					)}
			</div>
		</fieldset>
	)
}

const RenderMesoTemplate = ({muscleGroups}) => {
	const [excercises, setExcercises] = useState([])

	const fetchExcercises = async e => {
		await fetchExcercisesFiltered(e)
		.then(res => setExcercises(res.data))
		.catch(e => console.log(e.message))
	}

	return(
		<>
			<Select 
			onChange={fetchExcercises}
			placeholder="Select muscle groups"
			isMulti
    	name="muscle groups"
    	options={muscleGroups}
    	className="basic-multi-select"
    	classNamePrefix="select"
			/>
			{/* {excercises.length ? <MesoStack excercises={excercises}/> : null} */}
		</>
	)
}

// excercises is a filtered object of excercises returned by our backend
const MesoStack = ({mesoDays}) => ( 
	// excercises.map(ex => 
		// make a feed with excercise choices
		// <div key={ex.name}>
			// <h3>{ex.name}</h3>
		// </div>
	// )
	<h1>{mesoDays}</h1>
)

const TrainingStyleComponent = ({setTrainingStyle}) => {
	const styles = ['Push-Legs-Pull', 'Bro-Split', 'Full-Body', 'Upper-Lower']
	return(
		<fieldset onChange={e => setTrainingStyle(e.target.value)} className='flex-container' style={{margin: '10px', padding: '10px', textAlign: 'center', fontSize: '18px'}}>
  	<legend>Training Style:</legend>
			<div style={{display: 'flex', justifyContent: "space-around"}}>
				{styles.map((style, i) => 
						<div key={i}>
    					<input type="radio" id={style} name="trainingStyle" value={style} />
    					<label>&nbsp;{style}</label>
						</div>
					)}
			</div>
		</fieldset>
	)
}