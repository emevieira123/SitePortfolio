import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { ImgMsg } from '../../components/SVG/ImgMsg';
import { toast } from 'react-toastify';

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
      <Drawer
        title="Contact"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={"45vw"}
      >
        <ContactContainer>
          <ImgMsg style={{width: "20%", height: "40%"}} />

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
      </Drawer>
    </>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: auto;

  padding-left: 16%;

  form {
    display: flex;
    flex-direction: column;

    input { 
    width: 80%;
    height: 3rem;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    }

    textarea { 
      width: 80%;
      height: 8rem;
      border: 1px solid black;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    button {
      width: 20%;
      height: 2.5rem;
      border-radius: 5px;
      border: 0;
      background: #7538A8;
      color: #fff;
      font-size: 1.5rem;
      transition: all 0.35s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }  
`;