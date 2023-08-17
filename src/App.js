import AddEmployee from "./AddEmployees";
import "./App.css";
import Employee from "./employee";

function App() {
  return (
    <div className="App">
      <h1>Employee Data </h1>
      <Employee />
      <AddEmployee />
    </div>
  );
}

export default App;
