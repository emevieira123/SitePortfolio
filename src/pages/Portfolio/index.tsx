import { Row } from 'antd';
import styled from 'styled-components';
import { Footer } from '../../components/Fotter';
import { HeaderTitle } from '../../components/Header';
import { Projects } from '../../__mocks__/MockProjects';

export function Portfolio() {
  return (
    <PortfolioContainer>
      {/* <HeaderTitle>
        <h1>Portfólio</h1>
      </HeaderTitle> */}

      {/* <ContainerText>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim blandit scelerisque. Donec nec odio metus. Ut gravida urna sem, vitae posuere ex malesuada nec.</span>
      </ContainerText> */}

      <ContainerGrip>
        {Projects.map(item => {
          return (
            <CardProject>
              <img src={item.imgURL} alt="Em Breve" />
              <span>{item.description}</span>

              <div>
                <button>Condigo fonte</button>
                <button>Visualizar projeto</button>
              </div>
            </CardProject>
          )
        })}
      </ContainerGrip>
    </PortfolioContainer>
  );
}

const PortfolioContainer = styled(Row)`
  height: 95vh;
  background: var(--primary-800);

  border: 1px solid var(--primary-800);
`;

const ContainerGrip = styled(Row)`
  width: 100%;

  align-items: center;
  justify-content: space-evenly;
`;

const CardProject = styled(Row)`
  width: 30%;
  border-radius: 20px;
  background: var(--primary-900);
  padding: 1rem;

  align-items: center;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    /* border: 1px solid var(--secondary-600); */
  }

  img {
    width: 100%;
    height: 50%;
    border: 1px solid var(--secondary-600);
    border-radius: 5px;
  }

  span {
    color: var(--text-primary);
    font-size: 1.25rem;
    margin-top: 1rem;
    text-align: center;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;

    button {
      width: 35%;
      height: 2rem;
      margin-top: 2rem;
      font-size: 1rem;
      background: transparent;
      border: 1px solid var(--secondary-600);
      color: var(--secondary-600);
      border-radius: 3px;
      transition: all 0.3s;
    }
    button:hover {
      color: var(--text-primary);
      background: var(--secondary-600);
    }
  }
`;
