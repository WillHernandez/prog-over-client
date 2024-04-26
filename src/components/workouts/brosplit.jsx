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
	]
]