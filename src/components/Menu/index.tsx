import { useState } from 'react';
import { Link } from 'react-scroll';
import { Logo } from '../../assets/Logo';
import { Contact } from '../../pages/Contact';
import { MenuContainer } from './style';

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
      <Logo />

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


