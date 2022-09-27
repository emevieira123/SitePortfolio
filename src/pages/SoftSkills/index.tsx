import { CardSoftSkills } from '../../components/Cards/CardSoftSkills';
import { Row } from 'antd';
import { IconCss } from '../../assets/IconCss';
import { IconHTML } from '../../assets/IconHTML';
import { IconJS } from '../../assets/IconJS';
import { IconTS } from '../../assets/IconTS';
import { IconReact } from '../../assets/IconReact';
import { IconNextJs } from '../../assets/IconNextJS';
import { IconGithub } from '../../assets/IconGithub';
import { IconFigma } from '../../assets/IconFigma';
import styled from 'styled-components';

export function SoftSkills() {
  return (
    <SoftContainer>
      <ContentContainer>
        <TitleSkills>Conhecimentos</TitleSkills>
        <CardSoftSkills dataTestId="card-conhecimentos">
          <IconHTML />
          <IconCss />
          <IconJS />
          <IconTS />
          <IconReact />
        </CardSoftSkills>
      </ContentContainer>

      <ContentContainer>
        <TitleSkills>Estudando / Aprimorando</TitleSkills>
        <CardSoftSkills dataTestId="card-estudando-aprimorando">
          <IconTS />
          <IconReact />
          <IconNextJs />
        </CardSoftSkills>
      </ContentContainer>

      <ContentContainer>
        <TitleSkills>Outros Conhecimentos</TitleSkills>
        <CardSoftSkills dataTestId="card-outros-conhecimentos">
          <IconGithub />
          <IconFigma />
        </CardSoftSkills>
      </ContentContainer>
    </SoftContainer >
  );
}

const SoftContainer = styled(Row)`
  height: 93vh;
  background: var(--primary-900);
  padding: 0 0 2rem 0;
  justify-content: center;
  align-items: space-around;
`;

const ContentContainer = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleSkills = styled.span`
  color: var(--text-primary);
  font-size: 1.5em;
  margin-top: 2rem;
`;
