import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  /* height: 6.25rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  background: transparent;
  opacity: 1;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
`;

export const Logo = styled.div``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1rem;
`;

export const ItemList = styled.li`
  button {
    font-size: 1rem;
    border: none;
    border-radius: 2rem;
    color: #f6f6f6;
    background-color: #747474;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 1.3rem;
    box-shadow: 0px 3px 6px #0000005c;
    transition: 0.3s;
  }
  button:hover {
    cursor: pointer;
    background-color: #616161;
  }
`;

export const SearchImg = styled.img`
  margin-top: 0.8rem;
`;
