import React, { useState } from 'react';

import { useGetTeam } from 'queries/team';
import { Grid, Paragraph } from 'common';
import { Employee, EmployeeFilter } from 'modules';
import { EmployeeType, OfficeType } from 'types';
import { useGetOffices } from 'queries/offices';

export const Employees = () => {
  const { isLoading, data } = useGetTeam();
  const officesData = useGetOffices();
  const offices: OfficeType[] = officesData?.data?.items[0].offices || [];

  const [ filter, setFilter ] = useState("");

  const employees: EmployeeType[] = data?.items[0].employees || [];
  const employeeFunctions: string[] = [];

  // Add functions to array
  employees.forEach((employee) => {
    if (!employeeFunctions.includes(employee.value.function)) {
      employeeFunctions.push(employee.value.function);
    }

    // Add office to employee
    offices.forEach((office) => {
      if (office.id === employee.value.office_id) {
        employee.value.office = office;
      }
    });
  });

  // Callback function from child component
  const filterFunction = (title: string) => {
    setFilter(title)
  }

  // Check if filter is set, filter list accordingly
  const filteredEmployees: EmployeeType[] = [];
  if (filter !== "") {
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
                employee={employee} key={employee.id} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
