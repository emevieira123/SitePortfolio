import { Menu } from '../../components/Menu';
import styled from "styled-components";
import imgBackgound from "../../assets/desenvolvimento.png";

export function Home() {
  return (    
    <HomeContainer>
    <Menu />

    <TextHome>
      <p>Olá sou,</p>

      <b>Emerson Vieira</b>

      <p>
        Desenvolvedor front-end jr.
      </p>

        <Button href="https://github.com/emevieira123/" target="_blank" rel="noreferrer">
        <span>GitHub</span>
        </Button>

    </TextHome>

    <IMGContainer src={imgBackgound} alt="" />

  </HomeContainer>
  );
}

const HomeContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid black;
`;

const IMGContainer = styled.img`
width: 100%;
height: 100%;
`;

const TextHome = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30%;

  p {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }

  b {
    color: #7538A8;
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
  color: #7538A8;
  border: 2px solid #7538A8;
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
    background: #7538A8;
    transition: all .35s;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    width: 100%;
  }
`;