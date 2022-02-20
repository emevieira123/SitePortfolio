import styled from 'styled-components';
import { Footer } from '../../components/Fotter';

export function Portfolio() {
  return (
    <>
      <PortfolioContainer>
        <PortfolioHeader>
          <h1>Portfólio</h1>
        </PortfolioHeader>

        <ContainerText>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim blandit scelerisque. Donec nec odio metus. Ut gravida urna sem, vitae posuere ex malesuada nec. Fusce malesuada arcu quis odio consectetur gravida. Nullam in elementum diam. </span>
        </ContainerText>

        <ContainerGrip>
          <div><h4>Em Desenvolvimento</h4></div>
          <div><h4>Em Desenvolvimento</h4></div>
          <div><h4>Em Desenvolvimento</h4></div>
        </ContainerGrip>
      </PortfolioContainer>
      {/* <Footer /> */}
    </>
  );
}

const PortfolioContainer = styled.div`
  height: 95vh;
  background: #333333;
`;

const PortfolioHeader = styled.div`
  width: 100%;
  height: 11vh;
  
  display: flex;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin-left: 10%;
    color: #FFFFFF;
  }
`;

const ContainerText = styled.div`
  width: 932px;
  margin-left: 10%;

  span {
    font-size: 24px;
    color: #FFFFFF;
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
      color: #FFFFFF;
    }
  }

  div:hover {
    border: 2px solid #6C63FF;
    background: #333444;
  }
`;