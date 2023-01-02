import * as React from 'react';
import Image from 'next/image';

import { EmployeeContainer } from './styled';

export interface Props {
  small: string,
  alt: string
}

export const Employee = (props: Props) => {
  return (
    <EmployeeContainer>
      <Image
        src={`https://cms.labela.nl${props.small}`}
        width={488}
        height={800}
        alt={props.alt}
      />
    </EmployeeContainer>
  );
};
