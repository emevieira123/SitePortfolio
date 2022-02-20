import styled from "styled-components";
import imgAbout from "../../assets/Reactjs-App.png";

export function About() {
  return (
      <SobreContainer>  

        <AboutHeader>
          <h1>About</h1>
        </AboutHeader>     

        <ContainerImg>          
          <img src={imgAbout} alt="" />
        </ContainerImg>

        <RigthContainer>
          <p>
            Atualmente atuo como <span>Suporte e
            Desenvolvedor Front-end Jr</span>, tenho 32 anos
            e sou formado pela Fatec Senai no curso de Analise
            e Desenvolvimento de Sistemas, tenho buscado me capacitar
            cada vez mais para atingir minhas metas.
          </p>
          <span>Alguns dos meus hobbies são:</span>

          <ul>
            <li>
              <span>Lo-fi</span>
            </li>
            <li>
              <span>Estudar</span>
            </li>
            <li>
              <span>Jogar</span>
            </li>
            <li>
              <span>Séries</span>
            </li>
            <li>
              <span>Filmes</span>
            </li>
            <li>
              <span>Família</span>
            </li>
          </ul>
        </RigthContainer>
      </SobreContainer>
  );
}

const SobreContainer = styled.div`
  width: 100%;
  background: #333333;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const AboutHeader = styled.div`
  width: 100%;
  height: 10vh;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  grid-column: 1/3;

  h1 {
    margin-left: 10%;
    color: #FFFFFF;
  }
`;

const ContainerImg = styled.div`
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;  

  img {
    width: 50%;
    height: 35%;
  }
`;

const RigthContainer = styled.div`
  font-size: 1.25rem;
  color: #FFF;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    width: 70%;

    span {
      color: #F4BB47;
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
    color: #F4BB47;

    span {
      color: #FFF;
    }
  }
`;