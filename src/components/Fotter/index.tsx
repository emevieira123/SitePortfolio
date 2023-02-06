import { Logo } from '../../assets/Logo';
import { SociaisData } from './utils/SociaisData';
import { ContactButtonContainer, FooterContainer, IconButton, StyleSociais } from './style';

export function Footer() {
  return (
    <>
      <FooterContainer>
        <ContactButtonContainer>
          <Logo />
        </ContactButtonContainer>

        <StyleSociais>
          {
            SociaisData.map((item) => {
              return (
                <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
                  <IconButton icon={item.icon} />
                </a>
              );
            })
          }
        </StyleSociais>

        <p>© Copyright 2023 - Todos os direitos reservados a VDC Web System.</p>

      </FooterContainer>
    </>
  );
}


