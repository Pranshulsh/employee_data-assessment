// Employee.js
import React, { useState, useEffect } from "react";
// import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./employee.css";
import firebase from "./firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyD3m0yi7j2iod63qeu0W93t3zFIJWrMw2M",
//   authDomain: "test-91ffd.firebaseapp.com",
//   projectId: "test-91ffd",
//   storageBucket: "test-91ffd.appspot.com",
//   messagingSenderId: "102365524881",
//   appId: "1:102365524881:web:82b615eeee3bac6c13a030",
// };
// firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [sortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedEmployees = employees.slice(startIndex, endIndex);

  useEffect(() => {
    const employeesRef = database.ref("employees");

    employeesRef.on("value", (snapshot) => {
      const employeeData = snapshot.val();
      const employeeList = Object.values(employeeData);

      // Sort employees based on sortOrder
      employeeList.sort((a, b) => {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });

      setEmployees(employeeList);
    });
  }, [sortOrder]);

  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {displayedEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= employees.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Employee;
