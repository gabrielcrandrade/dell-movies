import Header from "./components/header/index.jsx";
import Main from "./components/main/index.jsx";
import Navbar from "./components/navbar/index.jsx";
import Carrossel from "./components/corousel/index.jsx";
import TopRated from "./components/topRated/index.jsx";
import Footer from "./components/footer/index.jsx";

import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      <Navbar />
      <Carrossel />
      <TopRated />
      <Footer />
    </div>
  );
}
