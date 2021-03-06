import React from "react";

function EmployeeRow(props) {
  return (
    <tr>
      <td>{props.employeeRecord.picture.large}</td>
      <td>{props.employeeRecord.name.first} {props.employeeRecord.name.last}</td>
      <td>{props.employeeRecord.phone}</td>
      <td>{props.employeeRecord.dob.date}</td>
    </tr>
  );
}

export default EmployeeRow;