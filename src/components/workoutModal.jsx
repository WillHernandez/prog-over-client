import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Modal from '@mui/material/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// position of modal on page
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  width: "50vw",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function WorkoutModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = e => {
		e.preventDefault()
		setOpen(true);
	} 
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BottomNavigationAction label="Workout" onChange={e => handleOpen(e)} icon={<AddCircleOutlineIcon />} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <a href="/mesoform" style={{textDecoration: 'none'}}>
            <Typography id="modal-modal-title" sx={{ mt: 0, fontSize: "14px" }}>
						  <ArticleIcon />
						  NEW MESO
            </Typography>
          </a>
          <a href="\" style={{textDecoration: 'none'}}>
            <Typography id="modal-modal-title" sx={{ mt: 2, fontSize: "14px" }}>
						  <RestorePageIcon />
              REPEAT MESO
            </Typography>
          </a>
          {/* write component to add an excercise */}
          <a href="/excercises/add" style={{textDecoration: 'none'}}>
            <Typography id="modal-modal-title" sx={{ mt: 2, fontSize: "14px" }}>
						  <FitnessCenterIcon />
              ADD EXCERCISE
            </Typography>
          </a>
        </Box>
      </Modal>
    </div>
  );
}
