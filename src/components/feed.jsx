import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from './appbar';
import BottomNav from './bottomNav';
// import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

export default function ZeroWidthStack() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 0 }}>
			<div>
				<ResponsiveAppBar />
				<StackData />
				<BottomNav />
			</div>
    </Box>
  );
}

const StackData = () => {
	// const [workouts, setWorkouts] = useState('')
	// will be fetched from db or local memory and stored in usestate for access during load

	const workouts = [
		{name: 'Will Hernandez', notes: 'W2-D6', excercises: ['Assisted Chin Ups', 'Bench Press', 'Squats', 'dips', 'barbell-row'], date: 'Mar 14'},
		{name: 'Will Hernandez', notes: 'W2-D6', excercises: ['Assisted Chin Ups', 'Bench Press', 'Squats with pause at bottom', 'dips'], date: 'Mar 14'}
	]

	return(
		workouts.map((workout, i) => (
			<a style={{"textDecoration": "none"}} href="\" key={i}>
				<Item 
				sx={{
					mx: 'auto',
					mt: 1,
					mb: i === workouts.length - 1 ? '70px' : '1px',
					p: 2,
				}}>
				<Stack  spacing={2} direction="row" alignItems="center">
					<Stack>
					{/* get user avatar from fetch */}
						<Avatar>W</Avatar>
					</Stack>
					<Stack  sx={{ minWidth: 0 }}>
						<Typography noWrap>{workout.name}</Typography>
						<Typography noWrap>{workout.notes}</Typography>
						<Typography style={{fontSize: '12px'}} noWrap>{`${workout.excercises[0]}, ${workout.excercises[1]}, ${workout.excercises[2]}`}</Typography>
						<Typography noWrap>{workout.date}</Typography>
					</Stack>
				</Stack>
				</Item>
			</a>
		))
	)
}