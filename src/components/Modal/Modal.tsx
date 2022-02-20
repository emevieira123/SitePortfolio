import { Modal } from "antd";
import 'antd/dist/antd.css';
import styled from 'styled-components';

interface ModalProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export function ModalHtml({ isModalVisible, handleOk, handleCancel }: ModalProps) {
  return (
    <>
      <StyledModal title="HTML" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>O HTML é uma linguagem de marcação. Estas linguagens são constituídas de códigos que delimitam conteúdos específicos, segundo uma sintaxe própria. O HTML tem códigos para criar paginas na web. Estes códigos que definem o tipo de letra, qual o tamanho, cor, espaçamento, e vários outros aspectos do site. </p>
      </StyledModal>
    </>
  );
}

export function ModalCss({ isModalVisible, handleOk, handleCancel }: ModalProps) {
  return (
    <>
      <StyledModal title="CSS" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.</p>
      </StyledModal>
    </>
  );
}

export function ModalJavascript({ isModalVisible, handleOk, handleCancel }: ModalProps) {
  return (
    <>
      <StyledModal title="JAVASCRIPT" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>JavaScript é a linguagem de programação usada para adicionar interatividade ao seu site (por exemplo: jogos, respostas quando botões são pressionados ou dados são inseridos em formulários, estilo dinâmico, animações). </p>
        <p>JavaScript (abreviado como "JS") é uma linguagem de programação dinâmica cheia de recursos que quando aplicada em um documento HTML, pode fornecer interatividade dinâmica em sites.</p>
      </StyledModal>
    </>
  );
}

export function ModalReact({ isModalVisible, handleOk, handleCancel }: ModalProps) {
  return (
    <>
      <StyledModal title="REACT" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente. Ela pode ser categorizada como o “V” no padrão MVC (Model-View-Controller).</p>
      </StyledModal>
    </>
  );
}

const StyledModal = styled(Modal)`
  .ant-modal-body {
    background-color: #f6f6f6;
    min-height: 100%;
  }
  .ant-modal-header {
    background-color: #448EF7;
    
    .ant-modal-title {
      color: #f6f6f6;
    }
  }
  
  .ant-modal-footer {
    background-color: #f6f6f6;
  }
`;