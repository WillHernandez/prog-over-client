import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './css/workout.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

export default function Workout() {
	// const [userDetails, setUserDetails] = useState('')
	const userDeets = { name: 'Will Hernandez', notes: 'W2-D6', date: 'Mar 14' }
	const workoutDetails = [
		{name: 'Squat', vals: [[225,10], [225,10], [225, 8], [225,10]]},
		{name: 'Leg Press', vals: [[350,17], [350,14], [350, 11], [350,10]]},
		{name: 'Seated Leg Curl', vals: [[155,14], [155,12], [155,11], [155,10], [155,9], [155,6], [155,6]]},
		{name: 'Bench Press', vals: [[225,5], [225,5], [225, 4]]},
	]

	const workoutStrArr = []
	let totalWeight = 0
	let totalSets = 0
	for(let i in workoutDetails) {
		let str = ''
		for(let j in workoutDetails[i].vals) {
			const weight = workoutDetails[i].vals[j][0];
			const sets = workoutDetails[i].vals[j][1];
			str += `${weight}x${sets} `;
			totalWeight += weight;
			totalSets += 1;
		}
		workoutStrArr[i] = str
	}

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 0}} style={{padding: '1px'}}>
      <Item
        sx={{
          my: 0,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
					<Stack>
						<Avatar>W</Avatar>
					</Stack>
					<Stack className='userDetail' sx={{ minWidth: 0, fontSize: '12px'}} alignItems="flex-start">
						<p>{userDeets.name}</p>
						<p style={{fontWeight: 'bold'}}>{userDeets.notes}</p>
						<p>{userDeets.date}</p>
					</Stack>
        </Stack>
      </Item>

			<Item
        sx={{
          my: 0,
          mx: 'auto',
          p: 2,
					backgroundColor: "rgb(227, 227, 227)"
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack sx={{ minWidth: 0 }}>
						<p style={{fontSize: '8px', color: 'rgb(161, 160, 160)'}}>WORKOUT</p>
          </Stack>
        </Stack>
      </Item>

			<GetWorkoutDetails workoutDetails={workoutDetails} workoutStrArr={workoutStrArr}/>

			<Item
        sx={{
          my: 0,
          mx: 'auto',
          p: 2,
					backgroundColor: "rgb(227, 227, 227)"
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack sx={{ minWidth: 0 }}>
						<p style={{fontSize: '8px', color: 'rgb(161, 160, 160)'}}>
							TOTAL SETS: {totalSets} &#x2022;  
							TOTAL WEIGHT: {totalWeight} lbs 
						</p>
          </Stack>
        </Stack>
      </Item>
    </Box>
  );
}
const GetWorkoutDetails = ({workoutDetails, workoutStrArr}) => {
	return(
		workoutDetails.map((w, i) => (
			<a style={{textDecoration: "none"}} href="\" key={i}>
				<Item className='workoutDetail'
				sx={{
					my: 0,
					mx: 'auto',
					p: 2,
				}}
				>
				<Stack spacing={2} direction="row" alignItems="start">
						<Stack sx={{ minWidth: 0 }}>
							<Typography style={{textAlign: "start"}} noWrap>{w.name}</Typography>
							<Typography noWrap>{workoutStrArr[i]}</Typography>
						</Stack>
				</Stack>
				</Item>
			</a>
		)))
}