import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const TituloFilmes = styled.h2`
  padding-left: 5rem;
  margin: 1rem 0;
`;

export const CardBox = styled.div`
  width: 90%;
  padding-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;

export const Card = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Img = styled.img`
  height: 40vh;
`;
