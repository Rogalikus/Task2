import style from "./table.module.css";
import delete1 from "../Images/pictures/close-not-allowed-11563187754a9l63qt2fx-removebg-preview.png";

const imageTemplate = (props) => {
  return (
    <span>
      <img
        src={props.pict}
        className={style.images}
        onClick={() => props.setActive(props.pict)}
      />
      <img
        src={delete1}
        className={style.delete}
        onClick={() => props.deletedImages(props.id)}
      />
    </span>
  );
};

export default imageTemplate;
