import { Row } from 'antd';
import styled from 'styled-components';
import { IconCss } from '../../assets/IconCss';
import { IconHTML } from '../../assets/IconHTML';
import { IconJS } from '../../assets/IconJS';
import { IconTS } from '../../assets/IconTS';
import { IconReact } from '../../assets/IconReact';
import { CardSoftSkills } from '../../components/Cards/CardSoftSkills';
import { HeaderTitle } from '../../components/Header';

export function SoftSkills() {
  return (
    <SoftContainer>
      <HeaderTitle>
        <h1>SoftSkills</h1>
      </HeaderTitle>

      <ContentContainer>
        <CardSoftSkills dataTestId="card-conhecimentos">
          <IconHTML />
          <IconCss />
          <IconJS />
          <IconTS />
          <IconReact />
        </CardSoftSkills>

        <CardSoftSkills dataTestId="card-estudando-aprimorando">

        </CardSoftSkills>

        <CardSoftSkills dataTestId="card-outros-conhecimentos">

        </CardSoftSkills>
      </ContentContainer>

    </SoftContainer >
  );
}

const SoftContainer = styled.div`
  height: 83vh;
  background: var(--primary-900);
`;

const ContentContainer = styled(Row)`
  width: 100%;
  /* height: 100%; */
  justify-content: center;
  border: 1px solid red;
  /* flex-direction: column; */
`;
