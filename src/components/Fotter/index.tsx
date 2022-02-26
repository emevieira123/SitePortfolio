import { useState } from 'react';
import styled from 'styled-components';
import { Contact } from '../../pages/Contact';
import { IconFacebook, IconGithub, IconGmail, IconInstagram, IconLikedin, IconTwitter } from '../SVG/IconsSociais';

export function Footer() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <FooterContainer>
        <ContactButtonContainer>
          <button onClick={showDrawer}>Contact</button>
        </ContactButtonContainer>

        <StyleSociais>
          <a href="https://www.linkedin.com/in/emevieira/" target="_blank" rel="noreferrer">
            <IconLikedin />
          </a>
          <a href="https://github.com/emevieira123/" target="_blank" rel="noreferrer">
            <IconGithub />
          </a>
          <a href="https://www.facebook.com/emersonvie" target="_blank" rel="noreferrer">
            <IconFacebook />
          </a>
          <a href="https://www.instagram.com/emerson_vchaves/" target="_blank" rel="noreferrer">
            <IconInstagram />
          </a>
          <a href="https://twitter.com/EmevieiraVieira" target="_blank" rel="noreferrer">
            <IconTwitter />
          </a>
          
        </StyleSociais>

        <p>© Copyright 2022 VieiraDevCode. All Rights Reserved.</p>

      </FooterContainer>
      <Contact onClose={onClose} visible={visible} />
    </>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 10rem;
  background: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  p {
  font-size: 1rem;
  color: #7538A8;
  }
`;

const ContactButtonContainer = styled.div`
  width: 100%;
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 9rem;
    height: 3rem;
    border: 1px solid #7538A8;
    color: #7538A8;
    border-radius: 5px;
    background: transparent;
    font-size: 1.25rem;
    transition: all .35s;
  }

  button:hover {
    border: 0;
    background: #7538A8;
    color: #FFFFFF;
  }
`;

const StyleSociais = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
  margin: 0.5rem;
  }
`;