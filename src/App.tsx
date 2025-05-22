import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner src="./img/banner_desktop.png" alt="Banner" />
      <MovieSection />
      <Banner src="./img/combo_desktop.png" alt="Combo" />
      <Newsletter />
      <Banner src="./img/tarjeta_desktop.png" alt="Banner" />
      <Footer />
    </>
  );
}

export default App;
