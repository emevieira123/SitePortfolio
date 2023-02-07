import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    src?: any;
}

export function ButtonPurple({ children, src }: Props) {
    return <Button href={src} target="_blank">{children}</Button>;
}

const Button = styled.a`
  text-decoration: none;
  color: var(--gray-100);
  background: var(--purple);
  border: 0;
  padding: 1rem;
  font-size: 1.25rem;
  border-radius: 5px;
  transition: all .2s;

  &:hover {
    opacity: 0.9;
    color: var(--gray-100);
  }
`;
