import { Row } from 'antd';
import styled from 'styled-components';
import { CardProject } from '../../components/Cards/CardProject';
import { Projects } from '../../__mocks__/MockProjects';

export function Portfolio() {
  return (
    <PortfolioContainer>
      <ContainerGrip>
        {Projects.map(item => {
          return (
            <CardProject
              imgURL={item.imgURL}
              title={item.title}
              description={item.description}
            />
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
