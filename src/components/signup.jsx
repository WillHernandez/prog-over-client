import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import * as uApi from '../api/userApi'
import { useNavigate } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://willhernandez.dev/">
        Will Hernandez
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function UserFormComponent() {
	const [ signUp, setSignup ] = useState(false)
  // const [cookies, setCookie] = useCookies(['name']);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const user = {
      username: data.get('userName'),
      email: data.get('email'),
      password: data.get('password'),
    }

		if(signUp) {
      try {
        const res = await uApi.signUp(user)
        if(res.status === 200) {
          localStorage.setItem('user', JSON.stringify(res.data.session.user))
          // setCookie('session', res.data.session)
        }
      } catch(e) {
        console.log(e);
      }
		} else {
      try {
        const res = await uApi.signIn(user)
        if(res.status === 200) {
          localStorage.setItem('user', JSON.stringify(res.data.session.user))
          // setCookie('session', res.data.session)
        }
      } catch(e) {
        console.log(e);
      }
		}
    return navigate("/stack")
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
						{signUp ? "Sign up" : "Sign in"}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User name"
                  autoFocus
                />
              </Grid>
              {signUp && 
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
              }
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            {signUp ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
								{signUp ? 
                	<Link href="#" onClick={e => {e.preventDefault(); setSignup(false)}} variant="body2">
                  	Already have an account? Sign in
                	</Link> :
                	<Link href="#" onClick={e => {e.preventDefault(); setSignup(true)}} variant="body2">
                  	Dont have an account yet? Sign up
                	</Link>
								}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}