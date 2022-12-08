import * as React from 'react';

import { Button } from 'common';

import { FilterContainer } from './styled';

export const EmployeeFilter = ({ employeeFunctions }) => {
  return (
    <FilterContainer>
      {employeeFunctions.map((employeeFunction) => (
        <Button key={employeeFunction}>{employeeFunction}</Button>
      ))}
    </FilterContainer>
  );
};
