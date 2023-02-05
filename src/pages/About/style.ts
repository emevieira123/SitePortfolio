import { Row } from "antd";
import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 90vh;
  background: var(--gray-800);
  padding-top: 2rem;
`;

export const ContainerGrid = styled(Row)`
  margin-top: 4rem;
`;

export const ContainerLeft = styled(Row)`
  width: 40%;

  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }
`;

export const ContainerRight = styled(Row)`
  padding: 2rem 2rem;
  width: 60%;

  flex-direction: column;

  p {
    width: 41.87rem;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
