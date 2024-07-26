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

export const BroSplit = [
	[
  	{
    	id: 1,
    	description: 'Incline Push',
			excercise: 'Incline Push',
			category: await getCategory('Incline Push')
  	},
  	{
    	id: 2,
    	description: 'Horizontal Push',
			excercise: 'Horizontal Push',
			category: await getCategory('Horizontal Push')
  	},
  	{
    	id: 3,
    	description: 'Chest Isolation',
			excercise: 'Chest Isolation',
			category: await getCategory('Chest Isolation')
  	},
  	{
    	id: 4,
    	description: 'Incline Push',
			excercise: 'Incline Push',
			category: await getCategory('Incline Push')
  	},
  	{
    	id: 5,
    	description: 'Horizontal Push',
			excercise: 'Horizontal Push',
			category: await getCategory('Horizontal Push')
  	},
  	{
    	id: 6,
    	description: 'Chest Isolation',
			excercise: 'Chest Isolation',
			category: await getCategory('Chest Isolation')
  	},
	],
	[
		{
			id: 1,
			description: 'Horizontal Pull',
			excercise: 'Horizontal Pull',
			category: await getCategory('Horizontal Pull')
		},
		{
			id: 2,
			description: 'Horizontal Pull',
			excercise: 'Horizontal Pull',
			category: await getCategory('Horizontal Pull')
		},
		{
			id: 3,
			description: 'Vertical Pull',
			excercise: 'Vertical Pull',
			category: await getCategory('Vertical Pull')
		},
		{
			id: 4,
			description: 'Vertical Pull',
			excercise: 'Vertical Pull',
			category: await getCategory('Vertical Pull')
		},
		{
			id: 5,
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
    	description: 'Delts',
			excercise: 'Delts',
			category: await getCategory('Delts')
  	},
		{
    	id: 4,
    	description: 'Delts',
			excercise: 'Delts',
			category: await getCategory('Delts')
  	},
		{
    	id: 5,
    	description: 'Traps',
			excercise: 'Traps',
			category: await getCategory('Traps')
  	},
	]
]