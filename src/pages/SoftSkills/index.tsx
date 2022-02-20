import styled from 'styled-components';
import { ImgSoftSkills } from '../../components/SVG/ImgSoftSkills';

export function SoftSkills() {
  return (
      <SoftSkillsContainer>
        <SoftSkillsHeader>
          <h1>SoftSkills</h1>
        </SoftSkillsHeader>

        <LeftContainer>
          <ButtonStyle
            style={{
              background: '#F16529',
              color: '#000000'
            }}>
            HTML
          </ButtonStyle>
          <ButtonStyle
            style={{
              background: '#264DE4',
              color: '#FFFFFF'
            }}>
            CSS
          </ButtonStyle>
          <ButtonStyle
            style={{
              background: '#F7DF1E',
              color: '#000000'
            }}>
            JAVASCRIPT
          </ButtonStyle>
          <ButtonStyle
            style={{
              background: '#53C1DE',
              color: '#FFFFFF'
            }}>
            REACT
          </ButtonStyle>
        </LeftContainer>

        <ContainerImg>
          <ImgSoftSkills />
        </ContainerImg>
      </SoftSkillsContainer >
  );
}

const SoftSkillsContainer = styled.div`
  height: 91.7vh;
  background: #FFFFFF;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SoftSkillsHeader = styled.div`
  width: 100%;
  height: 10vh;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  grid-column: 1/3;

  h1 {
    margin-left: 10%;
    color: #000000;
  }
`;

const ContainerImg = styled.div`
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;  

  img {
    width: 50%;
    height: 35%;
  }
`;

const LeftContainer = styled.div`
  font-size: 1.25rem;
  color: #FFF;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonStyle = styled.button`
  width: 30%;
  height: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  border: 0;
  margin-bottom: 20px;

  &:hover{
    filter: brightness(0.9);
  }
`;