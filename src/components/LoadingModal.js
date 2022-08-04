import { Modal } from "react-bootstrap";
import loadingGif from "../loading.gif";

const LoadingModal = ({ show }) => {
  return (
    <>
      <Modal show={show} animation={false} className="justify-content-center">
        <Modal.Header>
          <Modal.Title className="text-center mx-auto">Loading...</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={loadingGif} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoadingModal;
