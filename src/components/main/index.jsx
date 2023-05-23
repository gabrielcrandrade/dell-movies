import { IoIosPlay } from "react-icons/io";
import { FaFilm } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";

import * as S from "./styles.jsx";

const Main = () => {
  return (
    <S.Container>
      <S.BoxItems>
        <S.BoxInfo>
          <h1>Avatar: o Caminho da Água</h1>
          <h6>3hr 23 min | Fantasia, Família | 2023</h6>
          <h2>
            <AiFillStar color="#F3CD32" />
            9,9
            <h6>/10</h6>
            <FaImdb color="#F3CD32" width="3rem" />
          </h2>
          <p>
            Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
            ficarem juntos. No entanto, eles devem sair de casa e explorar as
            regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
            travar uma guerra difícil contra os humanos.
          </p>
        </S.BoxInfo>
        <S.BoxBtn>
          <S.BtnWatch>
            <IoIosPlay /> Assistir agora
          </S.BtnWatch>
          <S.BtnTrailer>
            <FaFilm /> Trailer
          </S.BtnTrailer>
        </S.BoxBtn>
      </S.BoxItems>
    </S.Container>
  );
};

export default Main;
