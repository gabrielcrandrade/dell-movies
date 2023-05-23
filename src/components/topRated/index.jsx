import Filme1 from "../../Assets/images/harriet.png";
import Filme2 from "../../Assets/images/StarWars.png";
import Filme3 from "../../Assets/images/bohemian.png";
import Filme4 from "../../Assets/images/pantera.png";
import Filme5 from "../../Assets/images/JurassicPark.png";
import Filme6 from "../../Assets/images/starfox.jpeg";
import Filme7 from "../../Assets/images/raya.png";
import Filme8 from "../../Assets/images/nos.png";
import Filme9 from "../../Assets/images/tenet.jpg";
import Filme10 from "../../Assets/images/naoolhepracima.png";

import * as S from "./styles.jsx";
import { useState } from "react";

const TopRated = () => {
  const [filmes, setFilmes] = useState([
    {
      Filme: Filme1,
      Nome: "Harriet",
      Ano: "2019"
    },
    {
      Filme: Filme2,
      Nome: "Star Wars",
      Ano: "2016"
    },
    {
      Filme: Filme3,
      Nome: "Bohemian Rapsody",
      Ano: "2020"
    },
    {
      Filme: Filme4,
      Nome: "Pantera Negra: Wak...",
      Ano: "2022"
    },
    {
      Filme: Filme5,
      Nome: "Jurassic Park",
      Ano: "2019"
    },
    {
      Filme: Filme6,
      Nome: "Starfox",
      Ano: "2022"
    },
    {
      Filme: Filme7,
      Nome: "Raya e o Último Dragão",
      Ano: "2016"
    },
    {
      Filme: Filme8,
      Nome: "Nós",
      Ano: "2016"
    },
    {
      Filme: Filme9,
      Nome: "Tenet",
      Ano: "2020"
    },
    {
      Filme: Filme10,
      Nome: "Não Olhe Para Cima",
      Ano: "2021"
    }
  ]);

  return (
    <>
      <S.TituloFilmes>Em Alta</S.TituloFilmes>
      <S.Container>
        <S.CardBox>
          {filmes.map((item) => (
            <S.Card>
              <S.Img src={item.Filme} alt={item.Nome} />
              <h4>{item.Nome}</h4>
              <h5>{item.Ano}</h5>
            </S.Card>
          ))}
        </S.CardBox>
      </S.Container>
    </>
  );
};

export default TopRated;
