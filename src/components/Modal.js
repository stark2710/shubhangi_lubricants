import React from 'react';
import '../styles/Modal.css';

const Modal = ({ images, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Modal;