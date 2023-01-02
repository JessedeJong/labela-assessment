import * as React from 'react';

import { Button } from 'common';

import { FilterContainer } from './styled';

type Props = {
  filterFunction: (title: string) => void;
  employeeFunctions: string[];
}

export const EmployeeFilter = (props: Props) => {
  return (
    <FilterContainer>
      {props.employeeFunctions.map((employeeFunction) => (
        <Button onClick={() => props.filterFunction(employeeFunction)} key={employeeFunction}>{employeeFunction}</Button>
      ))}
    </FilterContainer>
  );
};
