import styled from "styled-components";

import backgorund from '../../assets/HomeBackground.jpg'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const Header = styled.div`
    width: 100vw;
    height: 300px;
    display: flex;
    background-image: url(${backgorund});
    background-size: cover;
    background-position: center;
`;

export const Image = styled.image`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #5bb4ff;
`;
