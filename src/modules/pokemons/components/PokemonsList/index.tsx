import { FC, useEffect, useState } from "react";
import { Pagination } from "antd";
import { getImages } from "../../utils";

import styles from "./index.module.scss";

export const PokemonsList: FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const imageList = getImages();

    setImages(imageList);
  }, []);
  console.log("images", images);

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Pokedex</h1>
      </div>
      <div className={styles.list}>
        {images?.map((image) => (
          <img src={image} alt="item" />
        ))}
      </div>
      <Pagination
        showSizeChanger={false}
        className={styles.pagination}
        defaultCurrent={1}
        defaultPageSize={20}
        total={151}
      />
    </div>
  );
};
