import styles from "./modal.module.css";
import CloseButton from "../Images/pictures/close-not-allowed-11563187754a9l63qt2fx-removebg-preview.png";
import style from "../Components/table.module.css";

export const Modal = ({ pic, onclose }) => {
  if (!pic) return null;
  return (
    <>
      <div className={styles.modalBackground} />
      <div className={styles.modal}>
        <img className={styles.modalImg} src={pic} />
        <img className={style.delete} src={CloseButton} onClick={onclose} />
      </div>
    </>
  );
};
