import styled from "styled-components";

type HeaderTitleProps = {
  children: React.ReactNode;
}

export function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <ContainerHeader>
      {children}
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  width: 100%;
  height: 11vh;
  margin-top: 2.5rem;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #FFFFFF;
  }
`;
