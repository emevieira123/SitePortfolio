import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function ButtonTansparent({ children }: Props) {
    return <Button>{children}</Button>;
}

const Button = styled.button`
    background: transparent;
    border: 1px solid var(--purple);
    color: var(--purple);
    padding: 1rem;
    font-size: 1.25rem;
    border-radius: 5px;
    transition: all .2s;

    &:hover {
        opacity: 0.9;
    }
`;