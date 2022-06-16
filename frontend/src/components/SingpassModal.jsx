import { Modal, Button, InputGroup, FormControl, FloatingLabel } from "react-bootstrap";
import { FaLock, FaUser } from 'react-icons/fa';
import { useAuth } from "../auth";
import { useState } from "react";

import '../styles/singpass-modal.component.css';
import { get_user_info } from "../utils";

const SingpassModal = (props) => {
  const auth = useAuth();

  const [idValue, setIdValue] = useState('')

  const login = async () => {
    console.log(idValue);
    const result = await get_user_info(idValue);
    console.log(result);
    if (result.length === 0) {
      alert("Invalid Singpass ID");
    } else {
      auth.signIn(result[0]);
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dismissible
    >
      <Modal.Header closeButton>
        <Modal.Title>Singpass Password Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Log in</h5>
        <InputGroup>
          <InputGroup.Text>
            <FaUser />
          </InputGroup.Text>
          <FloatingLabel
            label="Singpass ID">
            <FormControl
                type="number"
                value={idValue}
                onChange={e => setIdValue(e.target.value)}
                placeholder="Singpass ID"
            />
          </FloatingLabel>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>
            <FaLock />
          </InputGroup.Text>
          <FloatingLabel
            label="Password">
            <FormControl
                type="password"
                placeholder="Password"
            />
          </FloatingLabel>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={login}>Login</Button>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SingpassModal;
