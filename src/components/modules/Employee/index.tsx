import * as React from 'react';
import Image from 'next/image';

import { EmployeeContainer, EmployeeInfo } from './styled';

export interface Props {
  small: string,
  alt: string,
  name: string,
  function: string
}

export const Employee = (props: Props) => {
  return (
    <EmployeeContainer>
      <EmployeeInfo>{props.name} <br/> { props.function }</EmployeeInfo>
      <Image
        src={`https://cms.labela.nl${props.small}`}
        width={488}
        height={800}
        alt={props.alt}
      />
    </EmployeeContainer>
  );
};
