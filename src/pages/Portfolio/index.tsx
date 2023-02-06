import { Row } from 'antd';
import styled from 'styled-components';

export function Portfolio() {
  return (
    <PortfolioContainer>
      <ContainerGrip>
        <strong>Em Atualização</strong>
      </ContainerGrip>
    </PortfolioContainer>
  );
}

const PortfolioContainer = styled(Row)`
  height: 95vh;
  background: var(--gray-800);
`;

const ContainerGrip = styled(Row)`
  width: 100%;

  align-items: center;
  justify-content: space-evenly;
`;
