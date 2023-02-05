import { Row } from 'antd';
import styled from 'styled-components';
import { TitleSections } from '../../shared/components/TitleSections';
import { DataBackSkills, DataFrontSkills } from './utils/DataSkills';

import { SkillCard } from './components/SkillCard';

export function SoftSkills() {
  return (
    <SoftContainer>
      <TitleSections subTitle='Quais são' title='Minhas habilidades' />
      <ContainerFrontBack>
        <SkillCard title="Frontend Developer" dataSource={DataFrontSkills} />
        <SkillCard title="Backend Developer" dataSource={DataBackSkills} />
      </ContainerFrontBack>
    </SoftContainer >
  );
}

const SoftContainer = styled(Row)`
  height: 93vh;
  background: var(--gray-800);
  padding-top: 2rem;

  flex-direction: column;
`;

const ContainerFrontBack = styled(Row)`
  margin-top: 2rem;
  padding: 2rem;
  gap: 2%;
`;
