import styled from "styled-components";
import { Row } from 'antd';

interface TitleProps {
    subTitle: string;
    title: string;
}

export function TitleSections({ title, subTitle }: TitleProps) {
    return (
        <Container>
            <span>{subTitle}</span>
            <strong>{title}</strong>
        </Container>
    );
}

const Container = styled(Row)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        color: var(--gray-100);
        font-weight: bold;
    }
    strong {
        color: var(--purple);
        font-size: 1.25rem;
    }
`;