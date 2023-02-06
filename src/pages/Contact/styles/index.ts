import { Button, Drawer, Row } from "antd";
import styled from "styled-components";

export const ContactDrawer = styled(Drawer)`
  .ant-drawer-header {
    background: var(--gray-800);
    border-bottom: 1px solid rgba(108, 99, 255, 0.25);
  }
  .ant-drawer-body {
    background: var(--gray-800);
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    margin-top: 20px;
    color: var(--gray-100);
  }
`;

export const Title = styled(Row)`
  width: 100%;
  color: var(--gray-100);
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.25rem;
  }
`;

export const CloseButton = styled(Button)`
  color: var(--gray-100);
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: none;
    color: var(--purple);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 0 10%;

  form {
    display: flex;
    flex-direction: column;

    input, textarea {
    height: 3rem;
    border: 1px solid var(--purple);
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 0 5px 0 5px;
    background: var(--gray-500);
    color: var(--gray-100);
    outline: none;
    }

    textarea {
      height: 8rem;
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 5px;
      border: 0;
      background: var(--purple);
      color: var(--gray-100);
      font-size: 1.5rem;
      transition: all 0.35s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
