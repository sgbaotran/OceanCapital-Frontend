import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import './Modal.css';

function TestModal({ ref, open, content, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);


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

export default TestModal;
