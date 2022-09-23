import styled from 'styled-components';
import { HeaderTitle } from '../../components/Header';

export function SoftSkills() {
  return (
    <SoftSkillsContainer>
      <HeaderTitle>
        <h1>SoftSkills</h1>
      </HeaderTitle>



    </SoftSkillsContainer >
  );
}

const SoftSkillsContainer = styled.div`
  height: 95vh;
  background: var(--primary-900);

  display: grid;
  grid-template-columns: 1fr 1fr;
`;
