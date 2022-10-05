import { Row } from "antd";
import styled from "styled-components";

interface CardProjectProps {
  imgURL: string;
  title: string;
  description: string;
}

export function CardProject({ imgURL, title, description }: CardProjectProps) {
  return (
    <CardContainer>
      <ImgProject>
        <img src={imgURL} alt="Em Breve" />
      </ImgProject>
      <TitleProject>
        <span>{title}</span>
      </TitleProject>
      <DescriptionProject>
        <span>{description}</span>
      </DescriptionProject>

      <ButtonContainer>
        <button>Condigo fonte</button>
        <button>Visualizar projeto</button>
      </ButtonContainer>
    </CardContainer>
  );
}

const CardContainer = styled(Row)`
  width: 30%;
  height: 80vh;
  border-radius: 20px;
  background: var(--primary-900);
  padding: 1rem;

  align-items: center;
  flex-direction: column;
`;

const ImgProject = styled(Row)`
    width: 100%;
    height: 50%;
    border-radius: 5px;

    border: 1px solid var(--secondary-600);

    img {
      width: 100%;
      height: 100%;
    }
`;

const TitleProject = styled(Row)`
  width: 100%;
  height: 8%;
  justify-content: center;
  align-items: center;

  span {
    color: var(--text-primary);
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    }
`;

const DescriptionProject = styled(Row)`
  width: 100%;
  height: 34%;

 span {
  color: var(--text-primary);
  font-size: 1.25rem;
  text-align: center;
 }
`;

const ButtonContainer = styled(Row)`
    width: 100%;
    height: 8%;
    justify-content: space-around;
    align-items: end;

    button {
      width: 40%;
      height: 2.5rem;
      font-size: 1.25rem;
      background: transparent;
      border: 1px solid var(--secondary-600);
      color: var(--secondary-600);
      border-radius: 3px;
      transition: all 0.3s;
    }
    button:hover {
      color: var(--text-primary);
      background: var(--secondary-600);
    }
`;
