import React, { useState } from 'react';

import { useGetTeam } from 'queries/team';
import { Grid, Paragraph } from 'common';
import { Employee, EmployeeFilter } from 'modules';
import { EmployeeType } from 'types';

export const Employees = () => {
  const { isLoading, data } = useGetTeam();
  const [ filter, setFilter ] = useState("");

  const employees: EmployeeType[] = data?.items[0].employees || [];
  const employeeFunctions: string[] = [];

  // Add functions to array
  employees.forEach((employee) => {
    if (!employeeFunctions.includes(employee.value.function)) {
      employeeFunctions.push(employee.value.function);
    }
  });

  // Callback function from child component
  const filterFunction = (title: string) => {
    setFilter(title)
  }

  // Check if filter is set, filter list accordingly
  const filteredEmployees: EmployeeType[] = [];
  if (filter !== "") {
    console.log('test')
    employees.forEach((employee) => {
      if (employee.value.function === filter) {
        filteredEmployees.push(employee);
      }
    })
  }

  // If a filtered list exists, use that, otherwise use the regular list
  const employeeList = filteredEmployees.length ? filteredEmployees : employees;

  return (
    <>
      {isLoading ? (
        <Paragraph>Loading</Paragraph>
      ) : (
        <>
          <EmployeeFilter filterFunction={(title: string) => filterFunction(title)} employeeFunctions={employeeFunctions} />
          <Grid>
            {employeeList.map((employee: EmployeeType) => (
              <Employee
                name={employee.value.name}
                function={employee.value.function}
                small={employee.value.image.small} alt={employee.value.image.alt} key={employee.id} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
