import { Row } from "antd";
import { FiCheckCircle } from "react-icons/fi";
import styled from "styled-components";

type DataSkills = {
  id: number;
  title: string;
  experience: string;
}

interface SkillCardProps {
  dataSource: DataSkills[];
  title: string;
}

export function SkillCard({ dataSource, title }: SkillCardProps) {
  return (
    <CardStyle>
      <h1>{title}</h1>
      {dataSource.map((item) => {
        return (
          <Row style={{ gap: '1rem' }} key={item.id}>
            <i><FiCheckCircle /></i>
            <Row style={{ flexDirection: 'column' }}>
              <strong>{item.title}</strong>
              <span>{item.experience}</span>
            </Row>
          </Row>
        );
      })}
    </CardStyle>
  );
}

const CardStyle = styled(Row)`
  border-radius: 2rem;
  background: var(--gray-500);
  padding: 2rem;
  width: 49%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10vh 10vh 10vh 10vh;
  grid-gap: 20rem 0;

  h1 {
    text-align: center;
    color: var(--purple);

    grid-column-start: 1;
    grid-column-end: 3;
  }

  i {
    color: var(--purple);
    font-size: 1.25rem;
  }

  strong {
    font-size: 1.25rem;
  }
`;
