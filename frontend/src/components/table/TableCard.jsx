import React from "react";
import "./table.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material'

function TableCard({ name, age, profession }) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h3>{profession}</h3>
      <div className="btn-container">
        <Button color="secondary" variant="contained" startIcon={<DeleteIcon />}>
          Delete
        </Button>

      </div>
    </div>
  );
}

export default TableCard;
