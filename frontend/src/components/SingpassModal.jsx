import { Modal, Button, Tab, Tabs } from "react-bootstrap";

const SingpassModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className=""
        >
          <Tab className="col" eventKey="home" title="Home">
            <></>
          </Tab>
          <Tab className="col" eventKey="profile" title="Profile">
            <></>
          </Tab>
        </Tabs>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SingpassModal;
