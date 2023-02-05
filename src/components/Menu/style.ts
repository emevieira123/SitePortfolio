import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 65px;
  background: var(--gray-800);
  border-bottom: 1px solid var(--purple);
  padding: 0 2rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  a {
    margin-left: 40px;
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--text-primary);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    color: var(--purple);
    transition: 0.2s;
  }

  a:focus {
    outline-style: none;
  }
`;