import React, { useState } from 'react';

import { useGetTeam } from 'queries/team';
import { Grid, Paragraph } from 'common';
import { Employee, EmployeeFilter, EmployeeForm } from 'modules';
import { EmployeeType, OfficeType } from 'types';
import { useGetOffices } from 'queries/offices';
import { Inputs } from 'modules/EmployeeForm';

export const Employees = () => {
  const { isLoading, data } = useGetTeam();
  const officesData = useGetOffices();
  const offices: OfficeType[] = officesData?.data?.items[0].offices || [];

  const [ filter, setFilter ] = useState("");

  const employees: EmployeeType[] = data?.items[0].employees || [];
  const employeeFunctions: string[] = [];

  // Set state for employees
  //

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

  // Callback for adding an employee through the form
  const addEmployee = (employee: Inputs) => {
    const newEmployee: EmployeeType = {
      id: employees.length + 1,
      type: 'potential-employee',
      value: {
        birthdate: employee.birthdate,
        favorite_food: employee.favorite_food,
        favorite_pet: employee.favorite_pet,
        function: employee.function,
        name: employee.name,
        image: {
          alt: 'Jesse de Jong',
          small: 'https://media.licdn.com/dms/image/C4E03AQGh4tRN77vwnw/profile-displayphoto-shrink_800_800/0/1646603814577?e=1678320000&v=beta&t=XZpBt-XrPI77Z3aotWTuRa5ASkkD3u6Gz6PrAwtT3fY',
          large: 'https://media.licdn.com/dms/image/C4E03AQGh4tRN77vwnw/profile-displayphoto-shrink_800_800/0/1646603814577?e=1678320000&v=beta&t=XZpBt-XrPI77Z3aotWTuRa5ASkkD3u6Gz6PrAwtT3fY',
          mobile: 'https://media.licdn.com/dms/image/C4E03AQGh4tRN77vwnw/profile-displayphoto-shrink_800_800/0/1646603814577?e=1678320000&v=beta&t=XZpBt-XrPI77Z3aotWTuRa5ASkkD3u6Gz6PrAwtT3fY'
        },
        office_id: undefined,
        office: undefined
      }
    }

    // Add employee into list, then update state to show new employee in list.
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
          <EmployeeForm addEmployee={(employee: Inputs) => addEmployee(employee)} />
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
