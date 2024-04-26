import { fetchExcerciseCategory } from "../../api/excerciseApi"

const getCategory = async category => {
	try {
		const res = await fetchExcerciseCategory(category)
		const excerises = res.data.map(e => e.name)
		return excerises
	} catch(e) {
		return []
	}
}

export const UpperLower = [
	[
  	{
    	id: 1,
    	description: 'Quads',
			excercise: 'Quads',
			category: await getCategory('Quads')
  	},
  	{
    	id: 2,
    	description: 'Glutes',
			excercise: 'Glutes',
			category: await getCategory('Glutes')
  	},
  	{
    	id: 3,
    	description: 'Quads',
			excercise: 'Quads',
			category: await getCategory('Quads')
  	},
		{
    	id: 4,
    	description: 'Glutes',
			excercise: 'Glutes',
			category: await getCategory('Glutes')
  	},
		{
    	id: 5,
    	description: 'Calves',
			excercise: 'Calves',
			category: await getCategory('Calves')
  	},
		{
    	id: 6,
    	description: 'Abs',
			excercise: 'Abs',
			category: await getCategory('Abs')
  	},
	],
	[
  	{
    	id: 1,
    	description: 'Horizontal Push',
			excercise: 'Horizontal Push',
			category: await getCategory('Horizontal Push')
  	},
  	{
    	id: 2,
    	description: 'Vertical Pull',
			excercise: 'Vertical Pull',
			category: await getCategory('Vertical Pull')
  	},
  	{
    	id: 3,
    	description: 'Incline Push',
			excercise: 'Incline Push',
			category: await getCategory('Incline Push')
  	},
		{
    	id: 4,
    	description: 'Horizontal Pull',
			excercise: 'Horizontal Pull',
			category: await getCategory('Horizontal Pull')
  	},
		{
    	id: 5,
    	description: 'Front Delts',
			excercise: 'Front Delts',
			category: await getCategory('Front Delts')
  	},
		{
    	id: 6,
    	description: 'Delts',
			excercise: 'Delts',
			category: await getCategory('Delts')
  	},
		{
    	id: 7,
    	description: 'Chest Iso',
			excercise: 'Chest Iso',
			category: await getCategory('Chest Iso')
  	},
	],	
	[
  	{
    	id: 1,
			description: 'Glutes',
			excercise: 'Glutes',
			category: await getCategory('Glutes')
  	},
  	{
    	id: 2,
    	description: 'Quads',
			excercise: 'Quads',
			category: await getCategory('Quads')
  	},
		{
    	id: 3,
    	description: 'Glutes',
			excercise: 'Glutes',
			category: await getCategory('Glutes')
  	},
  	{
    	id: 4,
    	description: 'Hamstrings',
			excercise: 'Hamstrings',
			category: await getCategory('Hamstrings')
  	},
		{
    	id: 5,
    	description: 'Glutes',
			excercise: 'Glutes',
			category: await getCategory('Glutes')
  	},
		{
    	id: 6,
    	description: 'Abs',
			excercise: 'Abs',
			category: await getCategory('Abs')
  	},
	],
	[
  	{
    	id: 1,
    	description: 'Horizontal Push',
			excercise: 'Horizontal Push',
			category: await getCategory('Horizontal Push')
  	},
  	{
    	id: 2,
    	description: 'Vertical Pull',
			excercise: 'Vertical Pull',
			category: await getCategory('Vertical Pull')
  	},
  	{
    	id: 3,
    	description: 'Incline Push',
			excercise: 'Incline Push',
			category: await getCategory('Incline Push')
  	},
		{
    	id: 4,
    	description: 'Horizontal Pull',
			excercise: 'Horizontal Pull',
			category: await getCategory('Horizontal Pull')
  	},
		{
    	id: 5,
    	description: 'Front Delts',
			excercise: 'Front Delts',
			category: await getCategory('Front Delts')
  	},
		{
    	id: 6,
    	description: 'Delts',
			excercise: 'Delts',
			category: await getCategory('Delts')
  	},
		{
    	id: 7,
    	description: 'Chest Iso',
			excercise: 'Chest Iso',
			category: await getCategory('Chest Iso')
  	},
	],	
	// [
  // 	{
  //   	id: 1,
  //   	description: 'Quads',
	// 		excercise: 'Quads',
	// 		category: await getCategory('Quads')
  // 	},
  // 	{
  //   	id: 2,
  //   	description: 'Glutes',
	// 		excercise: 'Glutes',
	// 		category: await getCategory('Glutes')
  // 	},
  // 	{
  //   	id: 3,
  //   	description: 'Quads',
	// 		excercise: 'Quads',
	// 		category: await getCategory('Quads')
  // 	},
	// 	{
  //   	id: 4,
  //   	description: 'Glutes',
	// 		excercise: 'Glutes',
	// 		category: await getCategory('Glutes')
  // 	},
	// 	{
  //   	id: 5,
  //   	description: 'Calves',
	// 		excercise: 'Calves',
	// 		category: await getCategory('Calves')
  // 	},
	// 	{
  //   	id: 6,
  //   	description: 'Abs',
	// 		excercise: 'Abs',
	// 		category: await getCategory('Abs')
  // 	},
	// ],
	// [
  // 	{
  //   	id: 1,
  //   	description: 'Incline Push',
	// 		excercise: 'Incline Push',
	// 		category: await getCategory('Incline Push')
  // 	},
  // 	{
  //   	id: 2,
  //   	description: 'Chest Isolation',
	// 		excercise: 'Chest Isolation',
	// 		category: await getCategory('Chest Isolation')
  // 	},
  // 	{
  //   	id: 3,
  //   	description: 'Horizontal Push',
	// 		excercise: 'Horizontal Push',
	// 		category: await getCategory('Horizontal Push')
  // 	},
	// 	{
  //   	id: 4,
  //   	description: 'Delts',
	// 		excercise: 'Delts',
	// 		category: await getCategory('Delts')
  // 	},
	// 	{
  //   	id: 5,
  //   	description: 'Biceps',
	// 		excercise: 'Biceps',
	// 		category: await getCategory('Biceps')
  // 	},
	// ],
]