import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href?: any;

}

export function ButtonTansparent({ children, href }: Props) {
    return <Button href={href} target="_blank">{children}</Button>;
}

const Button = styled.a`
  text-decoration: none;
  color: var(--purple);
  background: transparent;
  border: 1px solid var(--purple);
  color: var(--purple);
  padding: 1rem;
  font-size: 1.25rem;
  border-radius: 5px;
  transition: all .2s;

  &:hover {
    opacity: 0.9;
    color: var(--purple);
  }
`;
