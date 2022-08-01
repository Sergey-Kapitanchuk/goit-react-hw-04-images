import { useEffect } from "react";
import CSS from './Modal.module.css';

export function Modal({ onClose, url }) {

    useEffect(() => {
        window.addEventListener('keydown', clickOnEscKeyHandler);
        return () => window.removeEventListener('keydown', clickOnEscKeyHandler);
    });

    const clickOnEscKeyHandler = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    const clickOnBackdropHandler = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={CSS.Overlay} onClick={clickOnBackdropHandler}>
            <div className={CSS.Modal} >
                <img src={url} alt="img" width="800" />
            </div>
        </div>
    )
};



