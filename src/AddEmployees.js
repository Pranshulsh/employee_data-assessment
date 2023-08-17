import React, { useState } from "react";
import firebase from "./firebase";

function AddEmployee() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeesRef = firebase.database().ref("employees");
    const newEmployeeRef = employeesRef.push();

    newEmployeeRef.set({
      name,
      position,
      experience,
    });

    setName("");
    setPosition("");
    setExperience("");
  };

  return (
    <div className="add-employee">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Position:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <label>Experience:</label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <p>
          <button type="submit">Add Employee</button>
        </p>
      </form>
    </div>
  );
}

export default AddEmployee;
