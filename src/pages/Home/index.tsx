import { ButtonPurple } from '../../shared/components/Buttons/ButtonPurple';
import { ButtonTansparent } from '../../shared/components/Buttons/ButtonTransparent';
import { ButtonContainer, HomeContainer, ImgContainer, TitleContainer } from './style';

import ImgPixelArt from '../../assets/PixelArt.png';

export function Home() {
  return (
    <HomeContainer>

    <TitleContainer>
      <span>Olá eu sou</span>
      <h1>Emerson Vieira</h1>
      <p>Frontend Developer</p>

      <ButtonContainer>
        <ButtonTansparent>Download CV</ButtonTansparent>
        <ButtonPurple>Github</ButtonPurple>
      </ButtonContainer>
    </TitleContainer>

    <ImgContainer>
      <img src={ImgPixelArt} alt="" />
    </ImgContainer>

    </HomeContainer>
  );
}


