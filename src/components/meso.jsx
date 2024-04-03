import { useState, useEffect } from "react";
import Select from 'react-select'

export default function MesoForm() {
	const [mesoDays, setMesoDays] = useState('')
	const [muscleGroups, setMuscleGroups] = useState([])
	// const [trainingStyle, setTrainingStyle] = useState('')

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
		<form>
			<RadioMesoComponent setMesoDays={setMesoDays}/>
			{/* <TrainingStyleComponent setTrainingStyle={setTrainingStyle}/>	 */}
			<RenderMesoTemplate muscleGroups={muscleGroups}/>
		</form>
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

// const TrainingStyleComponent = ({setTrainingStyle}) => {
// 	const styles = ['Push-Legs-Pull', 'Bro-Split', 'Full-Body', 'Upper-Lower']
// 	return(
// 		<fieldset onChange={e => setTrainingStyle(e.target.value)} className='flex-container' style={{margin: '10px', padding: '10px', textAlign: 'center', fontSize: '18px'}}>
//   	<legend>Training Style:</legend>
// 			<div style={{display: 'flex', justifyContent: "space-around"}}>
// 				{styles.map((style, i) => 
// 						<div key={i}>
//     					<input type="radio" id={style} name="trainingStyle" value={style} />
//     					<label>&nbsp;{style}</label>
// 						</div>
// 					)}
// 			</div>
// 		</fieldset>
// 	)
// }

const RenderMesoTemplate = ({muscleGroups}) => {
	return(
		<Select 
		placeholder="Select muscle groups"
		isMulti
    name="muscle groups"
    options={muscleGroups}
    className="basic-multi-select"
    classNamePrefix="select" />
	)
}