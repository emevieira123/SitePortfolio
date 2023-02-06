import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { FormContainer } from "../../styles";

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  function enviarEmail(e: any) {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('gmailMessage', 'template_uedvzor', e.target, 'user_HLkLcMfeD8IPCtYjyIBUU')
      .then((result) => {
        onClose();
        toast.success('Mensagem enviada com sucesso!)');
        e.target.reset();
        setIsLoading(false);
      }, (error: any) => {
        toast.error(error.message);
      });
  }

  return (
    <FormContainer>
      <form onSubmit={enviarEmail}>
        <input type="text" placeholder="Nome" name="name" required />
        <input type="email" placeholder="E-mail" name="email" required />
        <input type="text" placeholder="Telefone" name="phone" />

        <textarea placeholder="Digite sua mensagem aqui..." name="message" required />

        <div>
          <button type="submit" >{!isLoading ? 'Enviar' : 'Enviando...'}</button>
        </div>
      </form>

    </FormContainer>
  );
}
