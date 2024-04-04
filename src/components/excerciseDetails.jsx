import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TextareaAutosize } from '@mui/base';
import * as exApi from '../api/excerciseApi'
import Button from '@mui/material/Button';

// notesgrid
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function ExcerciseDetails() {
	const { excercise } = useParams()
	const [excerciseDets, setExcerciseDets] = useState('')

	useEffect(() => {
		exApi.fetchExcerciseDetails(excercise)
		.then(res => setExcerciseDets(res.data))
		.catch(e => console.log(e))
	},[excercise, excerciseDets])

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
					<NotesForm excerciseDets={excerciseDets} setExcerciseDets={setExcerciseDets}/>
				</Stack>
    	</Box>
		}
		</>
  );
}

const NotesForm = ({excerciseDets, setExcerciseDets}) => {
	const submitNote = target => {
		exApi.postExcerciseNote(excerciseDets.name, target.value)	
		.then(() => setExcerciseDets(''))
		.catch(e => console.log(e))

		target.value = ''
	}

	const submitOnEnter = e => {
		if(e.code === "Enter") {
			submitNote(e.target)
		}
	}

	return(
		<>
		<div className='excerciseForm'>
			<Typography>Excercise Notes:</Typography>
			<form onSubmit={e => submitNote(e.target[0])}>
				<TextareaAutosize onKeyDown={e => submitOnEnter(e)} id='texta' minRows={5} />
				<br/>
				<Button type='submit' variant="outlined">Submit</Button>
			</form>
		</div>
		<div className='excerciseNotes'>
			{Boolean(excerciseDets.notes) ? excerciseDets.notes.map((note, i) => 
			<NotesGrid note={note} excercise={excerciseDets.name} setExcerciseDets={setExcerciseDets} index={i} key={i}/>) : null}
		</div>
		</>
	)
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const NotesGrid = ({note, excercise, setExcerciseDets, index}) => {
	const deleteNote = () => {
		exApi.deleteExcerciseNote(excercise, index)	
		.then(() => setExcerciseDets(''))
		.catch(e => console.log(e))
	}

	return(
  	<Box sx={{ flexGrow: 1, overflow: 'hidden', px: 1 }}>
			<StyledPaper
      	sx={{
        	my: 1,
        	mx: 0,
        	p: 1,
      	}}
    	>
      	<Grid style={{alignItems: 'center'}} container wrap="nowrap" spacing={2}>
					<Grid item style={{ margin: 1, padding: 1}}>
						<Button onClick={deleteNote} style={{fontSize: '10px'}} >Delete</Button>
          </Grid>
        	<Grid item>
          	<Typography>{note}</Typography>
        	</Grid>
      	</Grid>
    	</StyledPaper>
  	</Box>
	)
}