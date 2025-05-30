import styles from "./CardMovie.module.css";
import Tag from "../Tag";
import type { Movie } from "../../Types";

const MovieCard = (props: Movie) => {
  const { alt, src, title, genre, category, censorship, duration } = props;
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div className={styles.container}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <div className={styles.line1}>
            <p>{genre}</p>
            <Tag value={category} />
          </div>
          <div className={styles.line2}>
            <p>{duration}</p>
            <Tag value={censorship} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
