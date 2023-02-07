import { Row } from "antd";
import styled from "styled-components";
import { ButtonPurple } from "../../../../shared/components/Buttons/ButtonPurple";
import { ButtonTansparent } from "../../../../shared/components/Buttons/ButtonTransparent";

interface CardProjectsProps {
  title: string;
  img: string;
  href?: any;
  src?: any;
}

export function CardProjects({ title, img, href, src }: CardProjectsProps) {
  return (
    <Card>
      <img src={img} alt="" />
      <strong>{title}</strong>
      <Row style={{ gap: '1rem', padding: '1rem 0' }}>
        <ButtonTansparent href={href}>Github</ButtonTansparent>
        <ButtonPurple src={src}>Demonstração</ButtonPurple>
      </Row>
    </Card>
  );
}

export const Card = styled(Row)`
margin: 2rem 0;
padding: 2rem;
background: var(--gray-500);
border: 1px solid var(--purple);
border-radius: 2rem;

flex-direction: column;

img {
  width: 100%;
  border-radius: 2rem;
}
strong {
  padding: 1rem 0;
  font-size: 1.5rem;
}
`;
