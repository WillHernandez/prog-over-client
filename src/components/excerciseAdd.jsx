import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import * as exApi from '../api/excerciseApi'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ExcerciseAdd() {
  const [name, setName] = useState('')
  const [muscle, setMuscle] = useState('')
  const [link, setLink] = useState('')
  const [addSuccess, setAddSuccess] = useState('')

  const submitExcercise = e => {
    // e.preventDefault()
    const excerciseVals = {
      name,
      muscle,
      link
    }
    exApi.addExcercise(excerciseVals)	
		.then(req => {
      if(req.status === 200) {
          setAddSuccess('Excercise Added Successfully')
      }
    })
		.catch(e => setAddSuccess(e.response.data))

    setName('')
    setMuscle('')
    setLink('')
  }


  return (
    <>
      <Box
        component="form"
        sx={{
          // '& .MuiTextField-root': { m: 1, width: '80%'},
          '& .MuiTextField-root': { my: 1, mx: 5, width: '80%'},
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Excercise Name"
            onChange={e => setName(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Primary Muscle"
            onChange={e => setMuscle(e.target.value)}
          />
          <TextField 
            id="outlined-basic"
            label="Video Link"
            variant="outlined"
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <Button onClick={submitExcercise} variant="outlined">Submit</Button>
      {Boolean(addSuccess) && addSuccess.length > 0  ? <Typography style={{color: "gray"}}>{addSuccess}</Typography> : null}
      </Box>
    </>
  );
}