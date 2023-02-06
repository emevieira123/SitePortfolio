import { useState } from 'react';
import { Link } from 'react-scroll';
import { Logo } from '../../assets/Logo';
import { DrawerContact } from '../../pages/Contact';
import { MenuContainer } from './style';
import { DataMenu } from './utils/DataMenu';

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

        {DataMenu.map((item) => {
          return (
            <Link
              key={item.id}
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="#"
              onClick={item.title === 'Contato' ? showDrawer : () => {}}
            >
              {item.title}
            </Link>
          );
        })}
      </MenuContainer>
      {visible && <DrawerContact onClose={onClose} visible={visible} />}
    </>
  );
}
