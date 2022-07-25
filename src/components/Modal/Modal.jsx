import { Component } from "react";
import CSS from './Modal.module.css';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.clickOnEscKeyHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.clickOnEscKeyHandler);
    }

    clickOnEscKeyHandler = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    clickOnBackdropHandler = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <div className={CSS.Overlay} onClick={this.clickOnBackdropHandler}>
                <div className={CSS.Modal} >
                    <img src={this.props.url} alt="img" width="800" />
                </div>
            </div>
        )
    }
}

export default Modal;


