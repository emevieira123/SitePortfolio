import { useState } from 'react';
import styled from 'styled-components';
import { ModalHtml, ModalCss, ModalJavascript, ModalReact } from '../../components/Modal/Modal';
import { ImgSoftSkills } from '../../components/SVG/ImgSoftSkills';

export function SoftSkills() {
  const [isModalVisibleHtml, setIsModalVisibleHtml] = useState(false);
  const [isModalVisibleCss, setIsModalVisibleCss] = useState(false);
  const [isModalVisibleJS, setIsModalVisibleJS] = useState(false);
  const [isModalVisibleRJS, setIsModalVisibleRJS] = useState(false);

  const showModalHtml = () => {
    setIsModalVisibleHtml(true);
  };

  const showModalCss = () => {
    setIsModalVisibleCss(true);
  };

  const showModalJS = () => {
    setIsModalVisibleJS(true)
  }

  const showModalRJS = () => {
    setIsModalVisibleRJS(true)
  }

  const handleOk = () => {
    setIsModalVisibleHtml(false);
    setIsModalVisibleCss(false);
    setIsModalVisibleJS(false);
    setIsModalVisibleRJS(false);
  };

  const handleCancel = () => {
    setIsModalVisibleHtml(false);
    setIsModalVisibleCss(false);
    setIsModalVisibleJS(false);
    setIsModalVisibleRJS(false);
  };

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
          }}
          onClick={showModalHtml}
        >
          HTML
        </ButtonStyle>
        <ButtonStyle
          style={{
            background: '#264DE4',
            color: '#FFFFFF'
          }}
          onClick={showModalCss}
        >
          CSS
        </ButtonStyle>
        <ButtonStyle
          style={{
            background: '#F7DF1E',
            color: '#000000'
          }}
          onClick={showModalJS}
        >
          JAVASCRIPT
        </ButtonStyle>
        <ButtonStyle
          style={{
            background: '#53C1DE',
            color: '#FFFFFF'
          }}
          onClick={showModalRJS}
        >
          REACT
        </ButtonStyle>
      </LeftContainer>

      <ContainerImg>
        <ImgSoftSkills />
      </ContainerImg>
      
      <ModalHtml isModalVisible={isModalVisibleHtml} handleOk={handleOk} handleCancel={handleCancel} />
      <ModalCss isModalVisible={isModalVisibleCss} handleOk={handleOk} handleCancel={handleCancel} />
      <ModalJavascript isModalVisible={isModalVisibleJS} handleOk={handleOk} handleCancel={handleCancel} />
      <ModalReact isModalVisible={isModalVisibleRJS} handleOk={handleOk} handleCancel={handleCancel} />

    </SoftSkillsContainer >
  );
}

const SoftSkillsContainer = styled.div`
  height: 95vh;
  background: #FFFFFF;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SoftSkillsHeader = styled.div`
  width: 100%;
  height: 11vh;
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