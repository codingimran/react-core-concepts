import React from "react";
import ShowName from "./ShowName";
class Employee {
  constructor(name, work) {
    this.name = name;
    this.work = work;
  }
}
const employee = [new Employee("Imran Khan", "Full Stack Web Developer")];

function DisplyData() {
  return employee.map((record, i) => {
    return <ShowName name={record.name} work={record.work} key={i}></ShowName>;
  });
}

export default DisplyData;
