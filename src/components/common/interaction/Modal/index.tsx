import * as React from 'react';
import * as RadixModal from '@radix-ui/react-dialog';

import { CloseIcon } from './CloseIcon';
import { ModalClose, ModalContent, ModalOverlay, ModalWrapper } from './styled';

const ModalTrigger: React.FC<ModalTriggerProps> = ({ children }) => {
  return <RadixModal.Trigger asChild>{children}</RadixModal.Trigger>;
};

type ModalTriggerProps = {
  children: React.ReactNode;
};

const ModalRoot: React.FC<ModalRootProps> = ({ children, isOpen, openModal, closeModal }) => {
  return (
    <RadixModal.Root modal open={isOpen} onOpenChange={() => (isOpen ? closeModal() : openModal())}>
      {children}
    </RadixModal.Root>
  );
};

type ModalRootProps = {
  children: React.ReactNode;
  closeModal: () => void;
  isOpen: boolean;
  openModal: () => void;
};

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  return (
    <RadixModal.Portal>
      <ModalOverlay>
        <ModalWrapper>
          <ModalClose>
            <CloseIcon />
          </ModalClose>
          <ModalContent>{children}</ModalContent>
        </ModalWrapper>
      </ModalOverlay>
    </RadixModal.Portal>
  );
};

export type ModalContainerProps = {
  children: React.ReactNode;
};

export const Modal = {
  Root: ModalRoot,
  Container: ModalContainer,
  Trigger: ModalTrigger,
};
