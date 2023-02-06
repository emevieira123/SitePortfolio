import { Button } from "antd";
import styled from "styled-components";

export const FooterContainer = styled.div`
height: 15rem;
background: var(--primary-900);

display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

p {
font-size: 1rem;
color: var(--purple);
}
`;

export const ContactButtonContainer = styled.div`
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleSociais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
  margin: 0.5rem;
  color: white;
  }
`;

export const IconButton = styled(Button)`
  background: transparent;
  border: 0;
  color: var(--purple);
  :focus,
  :hover {
    color: var(--gray-100);
    background: transparent;
  }
`;
