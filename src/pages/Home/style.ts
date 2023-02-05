import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  background: var(--gray-800);
  margin-top: 4.2rem;
`;

export const TitleContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    font-size: 1rem;
  }

  h1 {
    color: var(--gray-100);
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    margin: 0;
    color: var(--gray-100);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ImgContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
