import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem auto;
  font-size: 1.25rem;
  font-weight: 300;
  list-style: none;
  a {
    padding: 1rem;
    color: #f6f6f6;
    text-decoration: none;
    border: solid 1px #f6f6f6;
    border-radius: 100%;
  }
  button {
    padding: 1rem;
    font-size: 1.25rem;
    font-weight: 300;
    color: #f6f6f6;
    background-color: transparent;
    border: solid 1px #f6f6f6;
    border-radius: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
