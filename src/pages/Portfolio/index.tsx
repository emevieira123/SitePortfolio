import styled from 'styled-components';
import { Footer } from '../../components/Fotter';
import { HeaderTitle } from '../../components/Header';

export function Portfolio() {
  return (
      <PortfolioContainer>
        <HeaderTitle>
          <h1>Portfólio</h1>
        </HeaderTitle>

        <ContainerText>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim blandit scelerisque. Donec nec odio metus. Ut gravida urna sem, vitae posuere ex malesuada nec. Fusce malesuada arcu quis odio consectetur gravida. Nullam in elementum diam. </span>
        </ContainerText>

        <ContainerGrip>
          <div><h4>Em Desenvolvimento</h4></div>
          <div><h4>Em Desenvolvimento</h4></div>
          <div><h4>Em Desenvolvimento</h4></div>
        </ContainerGrip>
      </PortfolioContainer>
  );
}

const PortfolioContainer = styled.div`
  /* height: 95vh; */
  background: var(--primary-800);

  border: 1px solid var(--primary-800);
`;

const ContainerText = styled.div`
  width: 932px;
  margin-left: 10%;

  span {
    font-size: 24px;
    color: var(--text-primary);
  }
`;

const ContainerGrip = styled.div`
  width: 100%;
  height: 70vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    width: 30%;
    height: 90%;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
      color: var(--text-primary);
    }
  }

  div:hover {
    border: 2px solid var(--secondary-600);
    background: var(--card-color);
  }
`;
