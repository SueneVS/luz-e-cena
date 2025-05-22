import styles from "./Tag.module.css";
import classNames from "classNames";

type Category = "2D" | "3D";

type Censorship = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface TagProps {
  value: Category | Censorship;
}

const tagClasses = {
  Livre: styles.allAges,
  "10 anos": styles.tenY,
  "12 anos": styles.twelveY,
  "14 anos": styles.fourteenY,
  "16 anos": styles.sixteenY,
  "2D": styles.twoD,
  "3D": styles.threeD,
};

const Tag = ({ value }: TagProps) => {
  const classes = classNames(styles.tag, tagClasses[value]);
  return <span className={classes}>{value}</span>;
};

export default Tag;
