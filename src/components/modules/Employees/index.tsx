import * as React from 'react';

import { useGetTeam } from 'queries/team';
import { Grid, Paragraph } from 'common';
import { Employee, EmployeeFilter } from 'modules';
import { EmployeeType } from 'types';

export const Employees = () => {
  const { isLoading, data } = useGetTeam();

  const employees: EmployeeType[] = data?.items[0].employees || [];

  const employeeFunctions: string[] = [];

  return (
    <>
      {isLoading ? (
        <Paragraph>Loading</Paragraph>
      ) : (
        <>
          <EmployeeFilter employeeFunctions={employeeFunctions} />
          <Grid>
            {employees.map((employee: EmployeeType) => (
              <Employee small={employee.value.image.small} alt={employee.value.image.alt} key={employee.id} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
