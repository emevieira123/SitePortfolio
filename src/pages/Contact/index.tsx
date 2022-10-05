import 'antd/dist/antd.css';
import { Button, Drawer, Row } from 'antd';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { ImgMsg } from '../../components/SVG/ImgMsg';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';

interface ContactProps {
  onClose: () => void;
  visible: boolean;
}

export function Contact({ onClose, visible }: ContactProps) {
  function enviarEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_uedvzor', e.target, 'user_HLkLcMfeD8IPCtYjyIBUU')
      .then((result) => {
        onClose();
        toast.success('Mensagem enviada com sucesso!)');
      }, (error: any) => {
        toast.error(error.message);
      });
    e.target.reset();
  }

  return (
    <>
      <ContactDrawer
        title={
          <Title>
            <span>Contact</span>
            <CloseButton icon={
              <AiOutlineClose style={{ width: '1.25rem', height: '1.25rem'}}
              onClick={onClose}
            />
          }
          />
          </Title>
        }
        placement="right"
        onClose={onClose}
        visible={visible}
        width={"45vw"}
        closable={false}
      >
        <ContactContainer>
          <ImgMsg style={{ width: "20%", height: "40%" }} />

          <h1>Formulário para Contato</h1>

          <FormContainer>
            <form onSubmit={enviarEmail}>

              <input className="contato-nome" type="text" placeholder="Nome" name="name" required />
              <input className="contato-email" type="email" placeholder="E-mail" name="email" required />
              <input className="contato-telefone" type="text" placeholder="Telefone" name="phone" />

              <textarea placeholder="Digite sua mensagem aqui..." name="message" />

              <button type="submit" >Enviar</button>
            </form>

          </FormContainer>
        </ContactContainer>
      </ContactDrawer>
    </>
  );
};

const ContactDrawer = styled(Drawer)`
  .ant-drawer-header {
    background: var(--primary-900);
  }
  .ant-drawer-body {
    background: var(--primary-900);
  }
`;

const Title = styled(Row)`
  width: 100%;
  color: var(--text-primary);
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled(Button)`
  color: var(--text-primary);
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: none;
    color: var(--secondary-600);
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    color: var(--text-primary);
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: auto;

  padding-left: 16%;

  form {
    display: flex;
    flex-direction: column;

    input, textarea {
    width: 80%;
    height: 3rem;
    border: 1px solid var(--text-primary);
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 0 5px 0 5px;
    background: var(--primary-800);
    color: var(--text-primary);
    outline: none;
    }

    textarea {
      height: 8rem;
    }

    button {
      width: 20%;
      height: 2.5rem;
      border-radius: 5px;
      border: 0;
      background: var(--secondary-600);
      color: #fff;
      font-size: 1.5rem;
      transition: all 0.35s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
