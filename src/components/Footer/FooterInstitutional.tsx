import Link from "../Link";
import styles from "./Footer.module.css";

const FooterInstitutional = () => (
  <div className={styles.institutional}>
    <h4 className={styles.title}>Institucional</h4>
    <Link className={styles.anchor} href="#">
      Sobre nós
    </Link>
    <Link className={styles.anchor} href="#">
      Para empresas
    </Link>
    <Link className={styles.anchor} href="#">
      Clube fidelidade
    </Link>
  </div>
);

export default FooterInstitutional;
