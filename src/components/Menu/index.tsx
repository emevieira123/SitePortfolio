import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { Logo } from '../../assets/Logo';
import LogoIMG from '../../assets/logo.png';
import { Contact } from '../../pages/Contact';

export function Menu() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
    <MenuContainer>
      <Logo style={{marginLeft: '2rem'}} />

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
        to="about"
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
        onClick={showDrawer}
      >
        Contact
      </Link>
    </MenuContainer>
    <Contact onClose={onClose} visible={visible} />
    </>
  );
}

const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 65px;
  background: var(--primary-900);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  a {
    margin-left: 40px;
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--text-primary);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    color: var(--secondary-600);
    transition: 0.2s;
  }

  a:focus {
    outline-style: none;
  }
`;
