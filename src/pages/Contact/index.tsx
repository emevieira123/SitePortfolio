import 'antd/dist/antd.css';
import { ImgMsg } from '../../components/SVG/ImgMsg';
import { ContactContainer, ContactDrawer } from './styles';
import { TitleDrawer } from './components/TitleDrawer';
import { ContactForm } from './components/ContactForm';

interface ContactProps {
  onClose: () => void;
  visible: boolean;
}

export function DrawerContact({ onClose, visible }: ContactProps) {
  return (
    <>
      <ContactDrawer
        title={<TitleDrawer title="Contato" onClose={onClose} />}
        placement="right"
        onClose={onClose}
        visible={visible}
        width={"45vw"}
        closable={false}
      >
        <ContactContainer>
          <ImgMsg style={{ width: "20%", height: "40%" }} />

          <h1>Formulário para Contato</h1>

          <ContactForm onClose={onClose} />

        </ContactContainer>
      </ContactDrawer>
    </>
  );
};
