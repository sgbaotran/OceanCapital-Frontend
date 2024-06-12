import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import 'components/modal/Modal.css';

const DeprecatedModal = forwardRef(function Modal({ content, children }, ref) {
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
        {children}

      </div>
    </dialog>
  );
});

export default DeprecatedModal;
