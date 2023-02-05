import { Row } from "antd";
import styled from "styled-components";
import { TitleSections } from "../../shared/components/TitleSections";
import { AboutContainer } from "./style";

import ImgAboutMe from '../../assets/AboutMe.png';
import { CardAbout } from "./components/Card";
import { FaMedal } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { ButtonPurple } from "../../shared/components/Buttons/ButtonPurple";

export function About() {
  return (
      <AboutContainer>

        <TitleSections subTitle="Conhecer" title="Sobre Mim" />

        <ContainerGrid>
          <ContainerLeft>
            <img src={ImgAboutMe} alt="" />
          </ContainerLeft>

          <ContainerRight>
            <CardsContainer>
              <CardAbout icon={<FaMedal />} title="Exoeriencias" content="2 anos trabalhando" />
              <CardAbout icon={<FiUsers />} title="Clientes" content="mais de 4" />
              <CardAbout icon={<AiOutlineFundProjectionScreen />} title="Projetos" content="15 completos" />
            </CardsContainer>

            <p>
              Sou graduado no curso de Análise e Desenvolvimento
              de Sistemas. <br/>
              Hoje atuo como Desenvolvedor Web Jr e prático o aprendizado
              contínuo em desenvolvimento de sistemas web, com foco em
              <span> ReactJS</span>. Meu objetivo é em um futuro próximo me tornar um
              Desenvolvedor FullStack.
            </p>

            <div>
              <ButtonPurple>Github</ButtonPurple>
            </div>
          </ContainerRight>

        </ContainerGrid>

      </AboutContainer>
  );
}

const ContainerGrid = styled(Row)`
  margin-top: 4rem;
`;

const ContainerLeft = styled(Row)`
  width: 40%;

  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }
`;

const ContainerRight = styled(Row)`
  padding: 2rem 2rem;
  width: 60%;

  flex-direction: column;

  p {
    width: 41.87rem;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 3rem;
`;