import FooterInfo from "./FooterInfo";
import FooterLogo from "./FooterLogo";
import styles from "./Footer.module.css";
import FooterInstitutional from "./FooterInstitutional";
import FooterNetwork from "./FooterNetwork";
import FooterDevelopedBy from "./FooterDev";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_info}>
          <FooterLogo />
          <FooterInfo />
          <FooterInstitutional />
          <FooterNetwork />
        </div>
      </footer>
      <FooterDevelopedBy />
    </>
  );
};

export default Footer;
