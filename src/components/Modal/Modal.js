import styles from './Modal.css'
import React from 'react';

function Modal({active, setActive, children}) {
    return (
        <div className={active ? "Modal active" : "Modal" } onClick={() => setActive(false)}>
            <div className={active ? "ModalContent active" : "ModalContent" } onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;