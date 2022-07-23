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
            this.props.closeModal();
        }
    }

    clickOnBackdropHandler = e => {
        if (e.target === e.currentTarget) {
            this.props.closeModal();
        }
    }

    render() {
        return (
            <div class={CSS.overlay} onClick={this.clickOnBackdropHandler}>
                <div class={CSS.modal} >
                    <img src={this.props.url} alt="" />
                </div>
            </div>
        )
    }
}

export default Modal;


