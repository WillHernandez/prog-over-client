import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid';
import { ppl } from './workouts/pushlegspull';

export default function LinkedFieldsRowEditing({type, days, row}) {
  const columns = [
    {
			field: 'excercise',
			headerName: 'Excercise',
			type: 'text',
      width: 130,
      editable: true,
		},
		{
      field: 'Day 1',
      headerName: 'Day 1',
      type: 'singleSelect',
      valueOptions: ({row}) => row.category,
      width: 140,
      editable: true,
    },
    {
      field: '10RM',
      headerName: '10RM',
      type: 'number',
      width: 110,
      editable: true,
    }
  ]

  return (
    <Box sx={{ width: '100%', height: '100%'}}>
      <DataGrid rows={ppl.push} columns={columns} editMode="row" />
      <DataGrid rows={ppl.legs} columns={columns} editMode="row" />
      <DataGrid rows={ppl.pull} columns={columns} editMode="row" />
    </Box>
  );
}