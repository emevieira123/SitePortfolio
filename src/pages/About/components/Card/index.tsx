import { Row } from "antd";
import styled from "styled-components";

interface CardProps {
    icon: any;
    title: string;
    content: string
}

export function CardAbout({ icon, title, content }: CardProps) {
    return (
        <Card>
            <i>{icon}</i>
            <strong>{title}</strong>
            <span>{content}</span>
        </Card>
    );
}

const Card = styled(Row)`
    background: var(--gray-500);
    width: 10rem;
    height: 10rem;
    border-radius: 10px;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    i {
        color: var(--purple);
        font-size: 2rem;
    }

    strong {
        font-size: 1rem;
    }
`;