import { Component } from "react";
import { createPortal } from "react-dom";
import {OverlayStyled, ModalStyled} from './Modal.styled'
const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleCloseByEscape = (e) => {
    if (e.code === "Escape") {
      console.log("Escape");
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByEscape);
  }

  render() {
    const { item, largeImageURL } = this.props;
    return createPortal(
      <OverlayStyled onClick={this.handleBackdropClick}>
      <ModalStyled>
        {item && (
            <img
              src={largeImageURL}
              alt=""
          />
        )}
        </ModalStyled>
      </OverlayStyled>,
      modalRoot
    );
  }
}

export default Modal;
