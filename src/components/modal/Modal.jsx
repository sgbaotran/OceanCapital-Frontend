import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import './Modal.css';

const Modal = forwardRef(function Modal({ content, children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => showDialog(),
    close: () => closeDialog(),
  }));

  function showDialog() {
    dialog.current.showModal();
  }

  function closeDialog() {
    dialog.current.close();
  }

  return (
    <dialog ref={dialog} className='modal'>
      <div className='modal-header'>
        <h2>Add New {content}</h2>
        <button type="button" onClick={closeDialog} className="close-button">X</button>
      </div>
      <div className="modal-content">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { closeModal: closeDialog });
        })}
      </div>
    </dialog>
  );
});

export default Modal;
