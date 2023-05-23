import Avatar from "../../Assets/images/AVTR-217@2x.png";
import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: linear-gradient(to bottom, transparent 0%, #000 98%),
    url(${Avatar});
  background-repeat: no-repeat;
  background-size: 100%;
  opacity: 1;
  @media (max-width: 912px) {
    height: 35vh;
  }
`;

export const BoxItems = styled.div`
  width: 80%;
  display: Flex;
  flex-direction: column;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 2rem;
  }
  h6 {
    font-size: 1rem;
  }
  h2 {
    display: flex;
    align-items: flex-end;
    gap: 0.3rem;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.4rem;
    max-width: 60%;
  }
`;

export const BoxBtn = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
  Button {
    /* width: 10rem;
    height: 2.5rem; */
    font-size: 1rem;
    border: none;
    border-radius: 2rem;
    color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }
`;

export const BtnWatch = styled.button`
  background-color: #d53a00;
  padding: 0.7rem 1.3rem;
`;

export const BtnTrailer = styled.button`
  background-color: #717171;
  padding: 0.7rem 3rem;
`;
