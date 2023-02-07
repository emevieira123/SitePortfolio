import { Row } from 'antd';
import styled from 'styled-components';
import { ButtonPurple } from '../../shared/components/Buttons/ButtonPurple';
import { ButtonTansparent } from '../../shared/components/Buttons/ButtonTransparent';
import { TitleSections } from '../../shared/components/TitleSections';

import Portfolio1 from "../../assets/portfolio1.jpg";
import { DataProjects } from './utils/DataProjects';
import { CardProjects } from './components/CardProjects';

export function Portfolio() {
  return (
    <PortfolioContainer>
      <TitleSections subTitle="Meus trabalhos recentes" title="Portfólio" />
      <ContainerGrip>
        {
          DataProjects.map((project) => {
            return (
              <CardProjects
                key={project.id}
                title={project.title}
                img={project.img}
                href={project.github}
                src={project.demonstracao}
              />
            );
          })
        }
      </ContainerGrip>
    </PortfolioContainer>
  );
}

const PortfolioContainer = styled.div`
  background: var(--gray-800);
  padding-top: 1rem;

  justify-content: center;
`;

const ContainerGrip = styled(Row)`
  margin-top: 1rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;


