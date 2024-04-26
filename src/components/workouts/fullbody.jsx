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

export const FullBody = [
	[
  	{
    	id: 1,
    	description: 'Quads',
			excercise: 'Quads',
			category: await getCategory('Quads')
  	},
  	{
    	id: 2,
    	description: 'Incline Push',
			excercise: 'Incline Push',
			category: await getCategory('Incline Push')
  	},
  	{
    	id: 3,
    	description: 'Hamstrings',
			excercise: 'Hamstrings',
			category: await getCategory('Hamstrings')
  	},
		{
    	id: 4,
    	description: 'Vertical Pull',
			excercise: 'Vertical Pull',
			category: await getCategory('Vertical Pull')
  	},
		{
    	id: 5,
    	description: 'Biceps',
			excercise: 'Biceps',
			category: await getCategory('Biceps')
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
    	description: 'Chest Iso',
			excercise: 'Chest Iso',
			category: await getCategory('Upper Pecks')
  	},
  	{
    	id: 3,
    	description: 'Hamstring Iso',
			excercise: 'Hamstring Iso',
			category: await getCategory('Hamstrings')
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
    	description: 'Triceps',
			excercise: 'Triceps',
			category: await getCategory('Triceps')
  	},
		{
    	id: 7,
    	description: 'Traps',
			excercise: 'Traps',
			category: await getCategory('Traps')
  	},
	],
	[
  	{
    	id: 1,
    	description: 'Vertical Pull',
			excercise: 'Vertical Pull',
			category: await getCategory('Vertical Pull')
  	},
		{
    	id: 2,
    	description: 'Horizontal Pull',
			excercise: 'Horizontal Pull',
			category: await getCategory('Horizontal Pull')
  	},
  	{
    	id: 3,
    	description: 'Quads',
			excercise: 'Quads',
			category: await getCategory('Quads')
  	},
  	{
    	id: 4,
    	description: 'Calves',
			excercise: 'Calves',
			category: await getCategory('Calves')
  	},
		{
    	id: 5,
    	description: 'Delts',
			excercise: 'Delts',
			category: await getCategory('Delts')
  	},
		{
    	id: 6,
    	description: 'Biceps',
			excercise: 'Biceps',
			category: await getCategory('Biceps')
  	}
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
    	description: 'Triceps',
			excercise: 'Triceps',
			category: await getCategory('Triceps')
  	},
  	{
    	id: 3,
    	description: 'Glutes',
			excercise: 'Glutes',
			category: await getCategory('Glutes')
  	},
  	{
    	id: 4,
    	description: 'Vertical Pull',
			excercise: 'Vertical Pull',
			category: await getCategory('Vertical Pull')
  	},
		{
    	id: 5,
    	description: 'Biceps',
			excercise: 'Biceps',
			category: await getCategory('Biceps')
  	},
		{
    	id: 6,
    	description: 'Delts',
			excercise: 'Delts',
			category: await getCategory('Delts')
  	},
		{
    	id: 7,
    	description: 'Horizontal Pull',
			excercise: 'Horizontal Pull',
			category: await getCategory('Horizontal Pull')
  	},
	],
	[
  	{
    	id: 1,
    	description: 'Front Delts',
			excercise: 'Front Delts',
			category: await getCategory('Front Delts')
  	},
		{
    	id: 2,
    	description: 'Delts',
			excercise: 'Delts',
			category: await getCategory('Delts')
  	},
  	{
    	id: 3,
			description: 'Vertical Pull',
			excercise: 'Vertical Pull',
			category: await getCategory('Vertical Pull')
  	},
  	{
    	id: 4,
    	description: 'Glutes',
			excercise: 'Glutes',
			category: await getCategory('Glutes')
  	},
		{
    	id: 5,
    	description: 'Biceps',
			excercise: 'Biceps',
			category: await getCategory('Biceps')
  	},
		{
    	id: 6,
    	description: 'Abs',
			excercise: 'Abs',
			category: await getCategory('Abs')
  	},
		{
    	id: 7,
    	description: 'Calves',
			excercise: 'Calves',
			category: await getCategory('Calves')
  	},
		{
    	id: 8,
    	description: 'Horizontal Push',
			excercise: 'Horizontal Push',
			category: await getCategory('Horizontal Push')
  	},
	]
]