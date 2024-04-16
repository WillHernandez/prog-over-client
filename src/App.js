import './App.css';
import UserFormComponent from './components/signup';
import ResponsiveAppBar from './components/appbar';
import ZeroWidthStack from './components/feed';
import Workout from './components/workout';
import Excercises from './components/excercises';
import ExcerciseDetails from './components/excerciseDetails';
import ExcerciseAdd from './components/excerciseAdd';
import BottomNav from './components/bottomNav';
import MesoForm from './components/meso';
import { createBrowserRouter, RouterProvider, Navigate, Outlet, useLocation, useRouteError } from "react-router-dom";
// import { useGlobalState } from './state/state';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

const ProtectedRoutes = () => {
	const location = useLocation()
	const user = JSON.parse(localStorage.getItem('user'))
	return user
    ? <Outlet />
    : <Navigate to="/" replace state={{ from: location }} />
};

export const router = createBrowserRouter(
	[
			{
				path: "/",
				element: <UserFormComponent />,
				errorElement: <ErrorPage />,
			},
			{
		element: <ProtectedRoutes />,
		children: [
			{
				path: "/stack",
				element: <ZeroWidthStack />,
			},
			{
				path: "/workout",
				element: <Workout />,
			},
			{
				path: "/excercises",
				element: <Excercises />,
			},
			{
				path: "/excercises/add",
				element: <ExcerciseAdd />,
			},
			{
				path: "/excercises/:excercise",
				element: <ExcerciseDetails />,
			},
			{
				path: "/mesoform",
				element: <MesoForm />,
			}
		]	
			},
		], { basename: "/" },
	);

const App = () => {
	return(
  	<div className="App">
			<ResponsiveAppBar />
			<RouterProvider router={router} />
			<BottomNav />
  	</div>
	)
}

export default App