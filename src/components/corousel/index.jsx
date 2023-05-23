import { useState } from "react";
import Carousel from "react-elastic-carousel";

import Filme1 from "../../Assets/images/zelda.png";
import Filme2 from "../../Assets/images/moonlight.png";
import Filme3 from "../../Assets/images/mario.jpg";
import Filme4 from "../../Assets/images/dune.png";
import Filme5 from "../../Assets/images/batman.png";
import Filme6 from "../../Assets/images/velozes.jpg";
import Filme7 from "../../Assets/images/psereia.jpg";
import Filme8 from "../../Assets/images/jhonwick.jpg";
import Filme9 from "../../Assets/images/d&d.jpg";
import Filme10 from "../../Assets/images/hfquantumania.jpg";

import * as S from "./styles.jsx";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  //começando de 1px até atingir o próximo
  //Largura da tela - quantidade de imagens por página
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 5 },
  { width: 1500, itemsToShow: 6 }
];

const Carrossel = () => {
  const [filmes, setFilmes] = useState([
    {
      Filme: Filme1,
      Nome: "A lenda de Zelda",
      Ano: "2024"
    },
    {
      Filme: Filme2,
      Nome: "Moonlight",
      Ano: "2022"
    },
    {
      Filme: Filme3,
      Nome: "Super Mario Bros",
      Ano: "2023"
    },
    {
      Filme: Filme4,
      Nome: "Duna",
      Ano: "2021"
    },
    {
      Filme: Filme5,
      Nome: "Homem Morcego",
      Ano: "2022"
    },
    {
      Filme: Filme6,
      Nome: "Velozes e Furiosos 10",
      Ano: "2023"
    },
    {
      Filme: Filme7,
      Nome: "A Pequena Sereia",
      Ano: "2023"
    },
    {
      Filme: Filme8,
      Nome: "John Wick 4: Baba Yaga",
      Ano: "2023"
    },
    {
      Filme: Filme9,
      Nome: "Dungeons & Dragons: Honra Entre Rebeldes",
      Ano: "2023"
    },
    {
      Filme: Filme10,
      Nome: "Homem-Formiga e a Vespa: Quantumania",
      Ano: "2023"
    }
  ]);

  return (
    <S.Container>
      <S.TituloCarolsel>Ultimos Lançamentos</S.TituloCarolsel>
      <Carousel breakPoints={breakPoints}>
        {filmes.map((item) => (
          <S.CardBox>
            <S.Img src={item.Filme} alt={item.Nome} />
            <h4>{item.Nome}</h4>
            <h5>{item.Ano}</h5>
          </S.CardBox>
        ))}
      </Carousel>
    </S.Container>
  );
};
export default Carrossel;
