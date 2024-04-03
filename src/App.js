import './App.css';
import ResponsiveAppBar from './components/appbar';
import ZeroWidthStack from './components/feed';
import Workout from './components/workout';
import Excercises from './components/excercises';
import ExcerciseDetails from './components/excerciseDetails';
import ExcerciseAdd from './components/excerciseAdd';
import BottomNav from './components/bottomNav';
import MesoForm from './components/meso';

import {
  createBrowserRouter,
  RouterProvider,
	// useRouteError,
} from "react-router-dom";

const router = createBrowserRouter(
	[
  	{
    	path: "/",
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
	]);

// const	ErrorBoundary = () => {
// 		let error = useRouteError();
// 		console.error(error);
// 		// Uncaught ReferenceError: path is not defined
// 		return <div>Dang!</div>;
// 	}

const App = () => (
  <div className="App">
		<ResponsiveAppBar/>
		<RouterProvider router={router} />
		<BottomNav/>
  </div>
);

export default App;