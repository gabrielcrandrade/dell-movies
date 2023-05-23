import LogoDell from "../../Assets/Logo/LogoDell.svg";
import Lupa from "../../Assets/images/Icon ionic-ios-search.png";

import * as S from "./styles.jsx";

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src={LogoDell} alt="Logo DellMovies" />
      </S.Logo>
      <S.NavList>
        <S.ItemList>Séries</S.ItemList>
        <S.ItemList>
          <button>Filmes</button>
        </S.ItemList>
      </S.NavList>
      <S.NavList>
        <S.ItemList>
          <S.SearchImg src={Lupa} alt="Lupa" />
        </S.ItemList>
        <S.ItemList>Filtro</S.ItemList>
        <S.ItemList>Login</S.ItemList>
      </S.NavList>
    </S.Container>
  );
};

export default Header;
