import React from 'react'
import "./table.css";

function TableCard({name,age,profession}) {
    return (
        <div className="card">
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h3>{profession}</h3>
            
        </div>
    )
}

export default TableCard
