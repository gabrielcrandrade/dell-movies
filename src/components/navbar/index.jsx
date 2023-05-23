import Lupa from "../../Assets/images/Icon ionic-ios-search.png";

import * as S from "./styles.jsx";

const Navbar = () => {
  return (
    <S.Container>
      <S.Navlist>
        <li>Popular</li>
        <li>Drama</li>
        <li>Ação</li>
        <li>Aventura</li>
        <li>Comédia</li>
        <li>Crime</li>
        <li>Fantasia</li>
        <li>Família</li>
        <li>
          <img src={Lupa} alt="Pesquisar" />
        </li>
      </S.Navlist>
    </S.Container>
  );
};

export default Navbar;
