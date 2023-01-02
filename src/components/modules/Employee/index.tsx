import React, {useState} from 'react';
import Image from 'next/image';

import { Modal } from 'common';

import { EmployeeContainer, EmployeeInfo, EmployeeModal } from './styled';
import { EmployeeType } from 'types';

export interface Props {
  employee: EmployeeType
}

export const Employee = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  // Generate birthday
  const date = new Date(props.employee.value.birthdate)
  const day = date.getDate()
  const month = date.getMonth() + 1; // getMonth return a value from 0-11, so add a 1
  const year = date.getFullYear();

  return (
    <>
      <EmployeeContainer onClick={openModal}>
        <EmployeeInfo>{props.employee.value.name} <br/> { props.employee.value.function }</EmployeeInfo>
        <Image
          src={`https://cms.labela.nl${props.employee.value.image.small}`}
          width={488}
          height={800}
          alt={props.employee.value.image.alt}
        />
      </EmployeeContainer>
      <Modal.Root isOpen={isOpen} closeModal={closeModal} openModal={openModal} >
        <Modal.Container>
          <EmployeeModal>
            <Image
              src={`https://cms.labela.nl${props.employee.value.image.small}`}
              width={488}
              height={800}
              alt={props.employee.value.image.alt}
            />
            <h2>{props.employee.value.name} </h2>
            <h4>Functie: {props.employee.value.function} </h4>
            <h4>Verjaardag: {day}-{month}-{year} </h4>
            <h4>Favoriet gerecht: {props.employee.value.favorite_food} </h4>
            <h4>Favoriet huisdier: {props.employee.value.favorite_pet} </h4>
            <h4>Werkt vanuit kantoor: {props.employee.value.office?.value.city}</h4>
          </EmployeeModal>
        </Modal.Container>
      </Modal.Root>
    </>
  );
};
