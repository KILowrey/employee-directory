import React from 'react';
// import './App.css';
import EmployeeTable from "./components/EmployeeTable";
import employeeData from "./utils/API";

function App() {
  return (
    <EmployeeTable employees={employeeData.results} />
  );
}

export default App;