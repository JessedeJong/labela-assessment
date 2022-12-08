import * as React from 'react';
import Image from 'next/image';

import { EmployeeContainer } from './styled';

export const Employee = ({ employee }) => {
  return (
    <EmployeeContainer>
      <Image
        src={`https://cms.labela.nl${employee.value.image.small}`}
        width={488}
        height={800}
        alt={employee.value.image.alt}
      />
    </EmployeeContainer>
  );
};
