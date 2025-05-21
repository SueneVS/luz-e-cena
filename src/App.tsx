import Banner from "./components/Banner";
import Link from "./components/Link";

function App() {
  return (
    <>
      <Banner src="./img/bannerDesktop.png" alt="Banner" />;
      <Link href="/" target="_blank">
        Link
      </Link>
    </>
  );
}

export default App;
