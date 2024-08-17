import React from 'react'
import TodoForm from './TodoForm'
import Button from '@mui/material/Button'

export default function Desc() {
  return (
    <div>
        <TodoForm />
        <div>
            <Button variant='contained' color='secondary'>Cancel</Button>
            <Button variant='contained'>Continue</Button>
        </div>
    </div>
  )
}
