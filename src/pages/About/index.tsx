import styled from "styled-components";
import { AboutImg } from "../../assets/AboutImg";
import { HeaderTitle } from "../../components/Header";

export function About() {
  return (
      <AboutContainer>

        <ContainerImg>
          <AboutImg width={439} height={547} />
        </ContainerImg>

        <RigthContainer>
          <p>
            Sou graduado no curso de Análise e Desenvolvimento
            de Sistemas.
          </p>

          <p>
            Hoje atuo como Desenvolvedor Web Jr e prático o aprendizado
            contínuo em desenvolvimento de sistemas web, com foco em
            <span> ReactJS</span>. Meu objetivo é em um futuro próximo me tornar um
            Desenvolvedor FullStack.
          </p>
        </RigthContainer>
      </AboutContainer>
  );
}

const AboutContainer = styled.div`
  width: 100%;
  height: 95vh;
  background: var(--primary-800);

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ContainerImg = styled.div`
  height: 89vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: 40%;
  }
`;

const RigthContainer = styled.div`
  font-size: 1.25rem;
  color: var(--text-primary);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    width: 70%;

    span {
      color: var(--secondary-600);
    }
  }

  span {
    width: 70%;
  }

  ul {
    width: 70%;
    margin-left: 70px;
  }

  li {
    color: #568FF7;

    span {
      color: #FFF;
    }
  }
`;
