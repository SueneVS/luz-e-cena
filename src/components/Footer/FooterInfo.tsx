import styles from "./Footer.module.css";

const FooterInfo = () => {
  return (
    <div className={styles.operation}>
      <h4 className={styles.title}>Funcionamento</h4>
      <span>Segunda a Sexta - 16h às 00h</span>
      <span>ola@luzecena.com.br</span>
      <span>0800 541 320</span>
    </div>
  );
};

export default FooterInfo;
