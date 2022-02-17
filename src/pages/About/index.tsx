import { Menu } from '../../components/Menu';
import styled from "styled-components";
import imgAbout from "../../assets/Reactjs-App.png";

export function About() {
  return (
    <>
      <Menu />
      <SobreContainer>

          <ContainerImg>
            <img src={imgAbout} alt="" />
          </ContainerImg>

        <RigthContainer>
          {/* <div className="containerTexto"> */}
            {/* <div className="linhaTop"></div> */}
            <p>
            Atualmente atuo como Suporte e 
            Desenvolvedor Front-end Jr, tenho 32 anos
            e sou formado pela Fatec Senai no curso de Analise
            e Desenvolvimento de Sistemas, tenho me capacitado 
            para atingir minhas metas.
            </p>
            <span>Alguns dos meus hobbies são:</span>

            <ul>
              <li>Lo-fi</li>
              <li>Estudar</li>
              <li>Jogar</li>
              <li>Series</li>
              <li>Filmes</li>
              <li>Familia</li>
            </ul>
            {/* <div className="linhaBotton"></div> */}
          {/* </div> */}
        </RigthContainer>
      </SobreContainer>
    </>
  );
}

const SobreContainer = styled.div`
  width: 100%;
  height: 91.7vh;
  background: #7538A8;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
`;

const RigthContainer = styled.div`
  background: #7538A8;
  font-size: 1.25rem;
  color: #FFF;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    width: 70%;
  }

  span {
    width: 70%;
  }

  ul {
    width: 70%;
    margin-left: 70px;
  }
`;