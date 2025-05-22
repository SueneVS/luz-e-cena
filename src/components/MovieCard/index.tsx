import styles from "./CardMovie.module.css";
import Tag from "../Tag";

type Category = "2D" | "3D";

type Censorship = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface CardMovieProps {
  src: string;
  alt: string;
  title: string;
  category: Category;
  censorship: Censorship;
  genre: string;
  duration: number;
}

const MovieCard = (props: CardMovieProps) => {
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
