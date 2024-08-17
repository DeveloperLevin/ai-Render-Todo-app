import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function() {
  return (
    <div>
        <h5>Task Name</h5>
        <IconButton aria-label="edit">
            <EditIcon />
        </IconButton>
        <IconButton aria-label="expand-more">
            <ExpandMoreIcon />
        </IconButton>
    </div>
  )
}
