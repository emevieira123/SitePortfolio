import { Menu } from '../../components/Menu';
import styled from "styled-components";
import imgBackgound from "../../assets/desenvolvimento.png";
import { HomeImg } from '../../assets/HomeImg';
import { Row } from 'antd';

export function Home() {
  return (
    <HomeContainer>
      <Menu />

      <TextHome>
        <p>Olá sou,</p>

        <b>Emerson Vieira</b>

        <p>
          Desenvolvedor Web Jr.
        </p>

        <Button href="https://www.linkedin.com/in/emevieira/" target="_blank" rel="noreferrer">
          <span>Linkedin</span>
        </Button>

      </TextHome>

      <IMGContainer>
        <HomeImg width={739} height={504} />
      </IMGContainer>

    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  background: var(--primary-900);
`;

const IMGContainer = styled(Row)`
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
`;

const TextHome = styled(Row)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-left: 30%;

  p {
    color: #f4f4f6;
    font-size: 2rem;
    margin: 0;
  }

  b {
    color: var(--secondary-600);
    font-size: 3rem;
    font-weight: 500;
  }
`;

const Button = styled.a`
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  border: 1px solid #fff;
  margin-top: 30px;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;

  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--secondary-600);
    transition: all .35s;
  }

  &:hover {
    color: var(--text-white);
  }

  &:hover::after {
    width: 100%;
  }
`;
