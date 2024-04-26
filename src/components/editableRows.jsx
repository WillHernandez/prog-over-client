import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'

export default function LinkedFieldsRowEditing({row, day}) {
  const columns = [
    {
			field: 'excercise',
			headerName: 'Excercise',
			type: 'text',
      width: 130,
      editable: true,
		},
		{
      field: `Day ${day}`,
      headerName: `Day ${day}`,
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
    <Box sx={{ width: '100%', height: '90%'}}>
      <DataGrid rows={row} columns={columns} editMode="row" />
    </Box>
  )
}