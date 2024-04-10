/**
 * A modal component, which displays the given content in a modal popup.
 * @param content The content to be displayed in the modal.
 * @returns The modal element, as a JSX element.
 */

const ModalContent = (modalContent: any): JSX.Element => {
  return (
    <>
      <div className="modal modal__background"></div>
      <div className="modal modal__content">
        <p>{modalContent}</p>
      </div>
    </>
  );
};

export default ModalContent;
