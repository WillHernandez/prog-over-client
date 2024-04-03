import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TextareaAutosize } from '@mui/base';
import * as exApi from '../api/excerciseApi'
import Button from '@mui/material/Button';

export default function ExcerciseDetails() {
	const { excercise } = useParams()
	const [excerciseDets, setExcerciseDets] = useState('')

	useEffect(() => {
		exApi.fetchExcerciseDetails(excercise)
		.then(res => setExcerciseDets(res.data))
		.catch(e => console.log(e))
	},[excercise])

  return (
		<>
		{Boolean(excerciseDets) && 
    	<Box
      	height={"80%"}
      	width={"85vw"}
      	my={4}
      	display="flex"
      	alignItems="start"
      	gap={4}
      	p={2}
      	sx={{ }}
    	>
				<Stack>
					<Typography>{excerciseDets.name}</Typography>
					<Typography>{excerciseDets.primary_muscle}</Typography>
					{Boolean(excerciseDets.video_link) && 
						<Typography>
							<a style={{textDecoration: "none"}} href={excerciseDets.video_link} target="_blank" rel="noopener noreferrer">Instructional Video</a>
						</Typography>
					}
					<NotesForm excercise={excercise} setExcerciseDets={setExcerciseDets}/>
					<div>
						<ul>
							{Boolean(excerciseDets.notes) ? excerciseDets.notes.map((note, i) => <li key={i}><Typography>{note}</Typography></li>): null}
						</ul>
					</div>
				</Stack>
    	</Box>
		}
		</>
  );
}

const NotesForm = ({excercise, setExcerciseDets}) => {
	const [notes, setNotes] = useState('')

	const submitNote = () => {
		exApi.postExcerciseNote(excercise, notes)	
		.then(res => setExcerciseDets(res.data))
		.catch(e => console.log(e))

		setNotes('')
	}

	return(
		<div>
			<form>
				<Typography>Excercise Notes:</Typography>
				<TextareaAutosize onChange={e => setNotes(e.target.value)} id='texta' minRows={5} />
				<br/>
				<Button onClick={submitNote} variant="outlined">Submit</Button>
			</form>
		</div>
	)
}