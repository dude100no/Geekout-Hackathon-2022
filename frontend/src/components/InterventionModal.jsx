import { Modal } from "react-bootstrap";

const InterventionModal = ({ show, setShow }) => {
  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Intervention
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Next of Kins have been alerted.</Modal.Body>
    </Modal>
  );
}

export default InterventionModal;