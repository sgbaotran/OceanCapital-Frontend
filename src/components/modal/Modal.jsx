import React, { useRef, useEffect } from 'react';
import './Modal.css';

function Modal({ open, onClose, content, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);


  return (
    <dialog ref={dialog} className='modal' onClose={onClose}>
      <div className='modal-header'>
        <h2>Add New {content}</h2>
        <button type="button" onClick={onClose} className="close-button">X</button>
      </div>
      <div className="modal-content">
        {open ? children : null}
      </div>
    </dialog>
  )
};

export default Modal;
