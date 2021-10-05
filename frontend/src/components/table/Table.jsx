import React from "react";
import "./table.css";
import TableCard from "./TableCard";

function Table() {
  let arr = [
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
    { name: "Ayush", age: "22", profession: "Software Developer", sex: "male" },
  ];

  return (
    <div className="table-container">
      {arr.map((elem) => (
        <TableCard
          name={elem.name}
          age={elem.age}
          profession={elem.profession}
          sex={elem.sex}
        />
      ))}
    </div>
  );
}

export default Table;
