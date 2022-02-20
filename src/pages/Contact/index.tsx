import 'antd/dist/antd.css';
import { Drawer } from 'antd';

interface ContactProps {
  onClose: () => void;
  visible: boolean;
}

export function Contact({onClose, visible}: ContactProps) {
  return (
    <>
      <Drawer 
        title="Contact" 
        placement="right" 
        onClose={onClose} 
        visible={visible}
        width={"45vw"}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};