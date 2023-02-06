import { AiOutlineClose } from "react-icons/ai";
import { CloseButton, Title } from "../../styles";

interface TitleDrawerProps {
  title: string;
  onClose: React.MouseEventHandler<SVGElement> | undefined;
}

export function TitleDrawer({ title, onClose }: TitleDrawerProps) {
  return (
    <Title>
      <span>{title}</span>
      <CloseButton icon={
        <AiOutlineClose style={{ width: '1.25rem', height: '1.25rem' }}
          onClick={onClose}
        />
      }
      />
    </Title>
  );
}
