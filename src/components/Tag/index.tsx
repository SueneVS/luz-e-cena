import type { Category, Censorship } from "../../Types";
import styles from "./Tag.module.css";
import classNames from "classNames";
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
