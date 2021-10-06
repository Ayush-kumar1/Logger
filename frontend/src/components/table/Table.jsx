import React from "react";
import "./table.css";
import TableCard from "./TableCard";

function Table() {
  let arr = [
    { name: "Ayush", age: "22", profession: "Software Developer"},
    { name: "Ayush", age: "22", profession: "Software Developer"},
    { name: "Ayush", age: "22", profession: "Software Developer"},
    { name: "Ayush", age: "22", profession: "Software Developer"},
    { name: "Ayush", age: "22", profession: "Software Developer"},
    { name: "Ayush", age: "22", profession: "Software Developer"},
    { name: "Ayush", age: "22", profession: "Software Developer"},
    { name: "Ayush", age: "22", profession: "Software Developer"},
    { name: "Ayush", age: "22", profession: "Software Developer"}, 
  ];

  return (
    <div className="table-container">
      {arr.map((elem) => (
        <TableCard
          name={elem.name}
          age={elem.age}
          profession={elem.profession}
          
        />
      ))}
    </div>
  );
}

export default Table;
