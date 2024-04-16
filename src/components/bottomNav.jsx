import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WorkoutModal from './workoutModal';
import Paper from '@mui/material/Paper';

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const [url, setUrl] = useState('')

  return (
    <a href={url}>
      <Box sx={{ width: 'auto', textDecoration: 'none', position: 'sticky' }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              if(newValue === 0) {
                setUrl('/stack')
              }
              if(newValue === 2) {
                setUrl('/excercises')
              }
            }}
          >
            <BottomNavigationAction label="Feed" icon={<HomeIcon />} />
            <WorkoutModal />
            <BottomNavigationAction label="Excercises" icon={<FitnessCenterIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </a>
  );
}