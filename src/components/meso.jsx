// import { useState, useEffect, useMemo } from "react";
import { useState } from "react";
// import Select from 'react-select'
import ResponsiveAppBar from './appbar';
import BottomNav from './bottomNav';
import LinkedFieldsRowEditing from "./editableRows";
import { BroSplit } from './workouts/brosplit'
import { FullBody } from './workouts/fullbody'
import { PushLegsPull } from './workouts/pushlegspull'
import { UpperLower } from './workouts/upperlower'
import Button from '@mui/material/Button';

let workoutsTypes = {
	BroSplit,
	FullBody,
	PushLegsPull,
	UpperLower
}

export default function MesoForm() {
	const [mesoDays, setMesoDays] = useState('')
	const [trainingStyle, setTrainingStyle] = useState('')

	const rows = []
	if(trainingStyle && Number(mesoDays)) {
		for(let i = 0; i < mesoDays; ++i) {
			rows.push(
				<LinkedFieldsRowEditing row={workoutsTypes[trainingStyle][i]} day={i+1} key={i}/>
			)
		}
	}

	const handleSubmit = e => {
		console.log(e);
	}
	// e.target.parentElement.parentElement.childNodes[2].childNodes[0].innerText
	// e.target.parentElement.parentElement.childNodes[2].childNodes[0].textContent
	return(
		<>
			<ResponsiveAppBar />
			<form>
				<RadioMesoComponent setMesoDays={setMesoDays}/>
				<TrainingStyleComponent setTrainingStyle={setTrainingStyle}/>
				<div className="mesoRows" style={{paddingBottom: '60px'}}>
					{Boolean(rows.length) && rows.map(row => row)}
       		{Boolean(rows.length) && <Button onClick={handleSubmit} variant="outlined">Submit Meso</Button>}
				</div>
			</form>
			{/* <div className="mesoRows" style={{paddingBottom: '60px'}}>
				<form>
					{Boolean(rows.length) && rows.map(row => row)}
       		{Boolean(rows.length) && <Button onClick={handleSubmit} variant="outlined">Submit</Button>}
				</form>
			</div> */}
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

// const RenderMesoTemplate = ({muscleGroups}) => {
// 	const [excercises, setExcercises] = useState([])

// 	const fetchExcercises = async e => {
// 		await fetchExcercisesFiltered(e)
// 		.then(res => setExcercises(res.data))
// 		.catch(e => console.log(e.message))
// 	}

// 	return(
// 		<>
// 			<Select 
// 			onChange={fetchExcercises}
// 			placeholder="Select muscle groups"
// 			isMulti
//     	name="muscle groups"
//     	options={muscleGroups}
//     	className="basic-multi-select"
//     	classNamePrefix="select"
// 			/>
// 			{/* {excercises.length ? <MesoStack excercises={excercises}/> : null} */}
// 		</>
// 	)
// }

const TrainingStyleComponent = ({setTrainingStyle}) => {
	const styles = ['Full Body', 'Push Legs Pull', 'Upper Lower', 'Bro Split']
	return(
		<fieldset onChange={e => setTrainingStyle(e.target.value.replace(/ /g,''))} className='flex-container' style={{margin: '10px', padding: '10px', textAlign: 'center', fontSize: '18px'}}>
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