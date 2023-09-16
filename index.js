const employee = {
    name: "James",
    streetAddress: 20100,
}


function updateEmployeeWithKeyAndValue(employee, sex, male) {
    const newEmployee = {...employee};
    newEmployee[sex] = male;
    return newEmployee;
}


function  destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Ndungu) {
    employee[name] = Ndungu;
    return(employee);
}


function deleteFromEmployeeByKey(employee) {
    const employeeUpdate = {...employee};
    delete employeeUpdate.streetAddress;
    delete employeeUpdate.name;
    return (employeeUpdate);
}


function destructivelyDeleteFromEmployeeByKey(employee,) {
    delete employee.streetAddress;
    delete employee.name;
    return (employee);
}