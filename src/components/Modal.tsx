import state from "../store";
import { useSnapshot } from "valtio";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

type ModalProps = {
  content?: string;
  closeModal?: () => void;
};

const Modal: React.FC<ModalProps> = ({ content, closeModal }) => {
  // const { isModalOpen } = useSnapshot(state);

  const portal = document.getElementById("portal");

  return (
    portal &&
    createPortal(
      // <ModalContent modalContent={content} />, portal
      <>
        <div onClick={closeModal} className="modal modal__background"></div>
        <div className="modal modal__content">
          <p>{content}</p>
          <button onClick={closeModal}>X</button>
        </div>
      </>,
      portal
    )
  );
};

export default Modal;
