import { FC } from "react";
import { useGetPokemonByNameQuery } from "../../../../lib/store/api/pokemon";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./index.module.scss";

export const PokemonCard: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isError, isLoading } = useGetPokemonByNameQuery(String(id));

  if (isLoading) {
    return <div>...loading</div>;
  }

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumbs}>
        <span onClick={handleHomeClick} role="presentation">
          Home
        </span>
        <span>/</span>
        <span>{data?.name}</span>
      </div>
      <div className={styles.container}>
        <img
          src={data?.sprites?.other?.dream_world?.front_default}
          alt={data?.name}
          className={styles.image}
        />
        <div className={styles.dataContainer}>
          <h2 className={styles.title}>{data?.name}</h2>
          <div className={styles.dataTable}>
            <div className={styles.dataRow}>
              <span>Types </span>
              <span>
                {data?.types?.map((item) => item?.type?.name).join(", ")}
              </span>
            </div>
            <div className={styles.dataRow}>
              <span>Height</span>
              <span>{data?.height}</span>
            </div>
            <div className={styles.dataRow}>
              <span>Weight</span>
              <span>{data?.weight}</span>
            </div>
            <div className={styles.dataRow}>
              <span>HP</span>
              <span></span>
            </div>
            <div className={styles.dataRow}>
              <span>Attack</span>
              <span></span>
            </div>
            <div className={styles.dataRow}>
              <span>Defense</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
