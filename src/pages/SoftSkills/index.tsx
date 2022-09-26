import { Row } from 'antd';
import styled from 'styled-components';
import { IconCss } from '../../assets/IconCss';
import { IconHTML } from '../../assets/IconHTML';
import { IconJS } from '../../assets/IconJS';
import { IconTS } from '../../assets/IconTS';
import { IconReact } from '../../assets/IconReact';
import { CardSoftSkills } from '../../components/Cards/CardSoftSkills';
import { HeaderTitle } from '../../components/Header';
import { IconNextJs } from '../../assets/IconNextJS';
import { IconGithub } from '../../assets/IconGithub';
import { IconFigma } from '../../assets/IconFigma';

export function SoftSkills() {
  return (
    <SoftContainer>
      {/* <HeaderTitle>
        <h1>SoftSkills</h1>
      </HeaderTitle> */}

      <ContentContainer>
      <TitleSkills>Conhecimentos</TitleSkills>
        <CardSoftSkills dataTestId="card-conhecimentos">
          <IconHTML />
          <IconCss />
          <IconJS />
          <IconTS />
          <IconReact />
        </CardSoftSkills>

        <TitleSkills>Estudando / Aprimorando</TitleSkills>
        <CardSoftSkills dataTestId="card-estudando-aprimorando">
          <IconTS />
          <IconReact />
          <IconNextJs />
        </CardSoftSkills>

        <TitleSkills>Outros Conhecimentos</TitleSkills>
        <CardSoftSkills dataTestId="card-outros-conhecimentos">
          <IconGithub />
          <IconFigma />
        </CardSoftSkills>
      </ContentContainer>

    </SoftContainer >
  );
}

const SoftContainer = styled.div`
  background: var(--primary-900);
  padding: 2rem 0 2rem 0;
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
