import style from "./table.module.css";
import ImageTemplate from "./ImageTemplate";
import React, { useEffect, useState } from "react";

export const Table = (props) => {
  const [images, setImages] = useState(
    JSON.parse(localStorage.getItem("images")) || []
  );

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const deletedImages = (id) => {
    setImages([...images, { id }]);
  };

  let idMap = images.map((id) => id);

  let result = props.imgData.filter(
    (e) => idMap.findIndex((i) => i.id === e.id) === -1
  );

  const restoreImg = () => {
    setImages([]);
  };

  let allImages = result.map((items) => (
    <ImageTemplate
      pict={items.pict}
      key={items.id}
      id={items.id}
      setActive={props.setActive}
      setPic={props.setPic}
      deletedImages={deletedImages}
    />
  ));

  return (
    <div className={style.body}>
      <div className={style.imagesCount}>
        Counter images - {allImages.length}
        <div className={style.body}>{allImages}</div>
        <button onClick={restoreImg}>Восстановить</button>
      </div>
    </div>
  );
};
