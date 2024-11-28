// src/components/StyledComponents.jsx
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
  visibility: hidden;
  width: 100vw;
  font-family: 'Poppins', sans-serif;
`;

export const Section = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 20vh;
`;

export const One = styled(Section)`
  font-size: 4.5rem;
`;

export const Two = styled(Section)`
  font-size: 1.2rem;
  font-weight: lighter;
`;

export const Three = styled(Section)`
  font-size: 3rem;
`;

export const Four = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  border: 3px solid #aaa;
  border-radius: 5px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
  width: 600px;

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  p {
    margin: 0;
    text-align: left;
  }

  span {
    visibility: hidden;
  }
`;

export const FakeBtn = styled.p`
  background-color: rgb(21, 161, 237);
  border-radius: 3px;
  bottom: -50px;
  color: #fff;
  padding: 0.5rem 1rem;
  position: absolute;
  right: 5px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    bottom: -38px;
  }
`;

export const Five = styled(Section)`
  font-size: 2rem;
  left: 0;
  right: 0;
  position: absolute;

  p {
    position: absolute;
    left: 0;
    right: 0;
  }

  .idea-3 strong {
    border-radius: 3px;
    display: inline-block;
    padding: 3px 5px;
  }

  .idea-5 {
    font-size: 4rem;

    span {
      display: inline-block;

      @media screen and (max-width: 500px) {
        display: block;
      }
    }
  }

  .idea-6 span {
    display: inline-block;
    font-size: 15rem;

    @media screen and (max-width: 500px) {
      font-size: 10rem;
    }
  }
`;

export const Six = styled(Section)`
  position: relative;
  top: 10vh;
  z-index: 1;

  img {
    display: inline-block;
    height: 350px;
    max-width: 100%;
  }

  .hat {
    position: absolute;
    left: 41.5%;
    top: -35%;
    width: 80px;

    @media screen and (max-height: 1000px) {
      left: 40%;
    }

    @media screen and (max-height: 800px) {
      left: 37%;
    }

    @media screen and (max-height: 700px) {
      left: 32%;
    }

    @media screen and (max-height: 850px) and (max-width: 450px) {
      left: 32%;
    }

    @media screen and (max-width: 500px) {
      width: 50px;
    }
  }
`;

export const Baloons = styled.div`
  position: absolute;

  img {
    display: inline-block;
    position: absolute;

    &:nth-child(even) {
      left: -10%;
    }

    &:nth-child(odd) {
      right: -10%;
    }

    &:nth-child(3n + 0) {
      left: 30%;
    }
  }
`;

export const Seven = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export const Eight = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;

  svg {
    position: absolute;
    top: 0;
    width: 25px;
    z-index: -1;
    visibility: hidden;

    &:nth-child(1) {
      fill: #bd6ecf;
      left: 5vw;
      top: 7vh;
    }

    &:nth-child(2) {
      fill: #7dd175;
      left: 35vw;
      top: 23vh;
    }

    &:nth-child(3) {
      fill: #349d8b;
      left: 23vw;
      top: 33vh;
    }

    &:nth-child(4) {
      fill: #347a9d;
      left: 57vw;
      top: 43vh;
    }

    &:nth-child(5) {
      fill: #c66053;
      left: 7vw;
      top: 68vh;
    }

    &:nth-child(6) {
      fill: #bfaa40;
      left: 77vw;
      top: 42vh;
    }

    &:nth-child(7) {
      fill: #e3bae8;
      left: 83vw;
      top: 68vh;
    }

    &:nth-child(8) {
      fill: #8762cb;
      left: 37vw;
      top: 86vh;
    }

    &:nth-child(9) {
      fill: #9a90da;
      left: 87vw;
      top: 94vh;
    }
  }
`;

export const WishHBD = styled.h3`
  font-size: 3em;
  margin: 0;
  text-transform: uppercase;

  span {
    display: inline-block;
    visibility: hidden;
  }
`;

export const Wish = styled.div`
  .wish h5 {
    font-size: 2rem;
    font-weight: lighter;
    margin: 10px 0 0;

    @media screen and (max-width: 500px) {
      font-size: 1.4rem;
    }
  }
`;

export const Nine = styled(Section)`
  p {
    font-size: 2rem;
    font-weight: lighter;

    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
      font-weight: lighter;
    }
  }

  #replay {
    cursor: pointer;
    z-index: 3;
    color: blue;
    text-decoration: underline;
  }

  .last-smile {
    font-size: 2rem;
  }
`;

// 新增的「點擊開始」文字
export const StartText = styled.p`
  position: absolute;
  top: 32vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10;
  color: #000;

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

// 新增的按鈕
export const StartButton = styled.button`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: #1976d2;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }
`;