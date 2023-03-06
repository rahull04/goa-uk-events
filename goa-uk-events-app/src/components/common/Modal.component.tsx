import { Modal as ModalComponent } from 'react-bootstrap';

interface ModalProps {
  isVisible: boolean;
  onClose?: () => any;
  title?: string;
  bodyComponent?: JSX.Element;
  footerComponent?: JSX.Element;
}

const Modal = ({ isVisible, onClose, title, bodyComponent, footerComponent }: ModalProps) => {
  return (
    <ModalComponent show={isVisible} onHide={onClose}>
      <ModalComponent.Header closeButton>
        <ModalComponent.Title>{title}</ModalComponent.Title>
      </ModalComponent.Header>
      <ModalComponent.Body>{bodyComponent}</ModalComponent.Body>
      <ModalComponent.Footer>{footerComponent}</ModalComponent.Footer>
    </ModalComponent>
  );
};

export default Modal;
