import React from 'react'
import "./table.css";

function TableCard({name,age,profession,sex}) {
    return (
        <div className="card">
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{profession}</h1>
            <h1>{sex}</h1>
        </div>
    )
}

export default TableCard
