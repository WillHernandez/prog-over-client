import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import * as exApi from '../api/excerciseApi'
import ResponsiveAppBar from './appbar';
import BottomNav from './bottomNav';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

export default function Excercises() {
  return (
		<div>
			<ResponsiveAppBar />
    	<Box sx={{ flexGrow: 1, overflow: 'hidden', px: 0 }}>
				<div>
					<StackData />
				</div>
    	</Box>
			<BottomNav />
		</div>
  );
}

const StackData = () => {
	const [excercises, setExcercises] = useState([])

	useEffect(() => {
		exApi.fetchAllExcercises()
		.then(res => setExcercises(res.data))
		.catch(e => console.log(e))
	},[])

	return(
		excercises.map((e, i) => (
			<a style={{"textDecoration": "none"}} href={`/excercises/${e.name}`} key={i}>
				<Item 
				sx={{
					mx: 'auto',
					mt: 1,
					mb: i === excercises.length - 1 ? '70px' : '1px',
					p: 2,
				}}>
				<Stack spacing={2} direction="row" alignItems="center">
					<Stack sx={{ minWidth: 0 }}>
						<Typography noWrap>{e.name}</Typography>
						<Typography noWrap>{e.primary_muscle}</Typography>
						<Typography noWrap>{e.video_link}</Typography>
					</Stack>
				</Stack>
				</Item>
			</a>
		))
	)
}