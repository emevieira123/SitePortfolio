import { Link } from 'react-scroll';
import styled from 'styled-components';
import LogoIMG from '../../assets/logo.png';

export function Menu() {
  return (
    <MenuContainer>
      <Logo src={LogoIMG} alt="Vieira Dev Code" />

      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        href="#"
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="sobre"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        href="#"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        href="#"
      >
        Soft Skills
      </Link>
      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        href="#"
      >
        Portfólio
      </Link>
      <Link
        activeClass="active"
        to="contato"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        href="#"
      >
        Contact
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

  /* filter: opacity(80%); */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  a {
    margin-left: 40px;
    font-size: 1.25rem;
    font-weight: 400;
    color: #000;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    color: #7538A8;
    transition: 0.2s;
  }

  a:focus {
    outline-style: none;
  }
`;

const Logo = styled.img`
  width: 300px;
  height: 50px;
`;