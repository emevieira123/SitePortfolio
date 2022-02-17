import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export function Menu() {
  return (
    <MenuContainer>
      <p>Vieira<Teste>Dev</Teste>Code</p>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Home</button>
      </Link>
      <Link
        activeClass="active"
        to="sobre"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Sobre mim</button>
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Soft Skills</button>
      </Link>
      <Link
        activeClass="active"
        to="contato"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button>Contato</button>
      </Link>

    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 65px;
  background: #fff;

  filter: opacity(80%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  p {
    padding-right: 45%;
    margin-left: 30px;
    font-size: 2rem;
    font-weight: 600;
    color: #000;
  }

  button {
    margin-left: 1px;
    width: 9rem;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 500;
    background: transparent;
    color: #000;
    cursor: pointer;
    border:none!important;
  }

  button:hover {
    color: #7538A8;
    transition: 0.2s;
  }

  button:focus {
    outline-style: none;
  }
`;

const Teste = styled.span`
color: #7538A8;
`;