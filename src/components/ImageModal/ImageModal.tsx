import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface ImageModalProps {
  openModal: boolean;
  closeModal: () => void;
  image: {
    urls?: { regular: string };
    alt_description?: string;
  } | null;
}

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  openModal,
  closeModal,
  image,
}) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      overlayClassName={s.ReactModal__Overlay}
      className={s.ReactModal__Content}
      contentLabel={image?.alt_description || "Image modal"}
    >
      <button className={s.button} onClick={closeModal}>
        Close
      </button>
      {image && (
        <div className={s.modal}>
          <img
            src={image.urls?.regular}
            alt={image.alt_description}
            style={{ width: "100%" }}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
