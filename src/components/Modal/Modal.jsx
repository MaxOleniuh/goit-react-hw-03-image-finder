import { Component } from "react";
import { createPortal } from "react-dom";

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
    const { item } = this.props;
    return createPortal(
      <div onClick={this.handleBackdropClick}>
        {item && (
            <img
              src={item.largeImageURL}
              alt=""
          />
        )}
        
      </div>,
      modalRoot
    );
  }
}

export default Modal;
