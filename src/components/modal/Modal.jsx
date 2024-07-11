import React, { useRef, useEffect } from 'react';
import './Modal.css';
import { createPortal } from 'react-dom';

function Modal({ open, onClose, content, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);


  return createPortal(
    <dialog ref={dialog} className='modal' onClose={onClose}>
      <div className='modal-header'>
        <h2>{content}</h2>
        <button type="button" onClick={onClose} className="close-button">X</button>
      </div>
      <div className="modal-content">
        {open ? children : null}
      </div>
    </dialog>
    ,
    document.getElementById('modal')
  )
};

export default Modal;
