import { Row } from "antd";
import styled from "styled-components";

type CardProps = {
  dataTestId?: string;
  children: React.ReactNode;
}

export function CardSoftSkills({ dataTestId, children }: CardProps) {
  return (
    <Container data-testid={dataTestId}>
      {children}
    </Container>
  );
}

const Container = styled(Row)`
  background: var(--primary-800);
  width: 80%;
  height: 8rem;
  margin: 1rem 0 1rem 0;

  align-items: center;
  justify-content: space-evenly;
`;
