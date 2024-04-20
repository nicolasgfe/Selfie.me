import styled from "styled-components";

import backgorund from '../../assets/homebackground.jpg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const Header = styled.div`
    width: 100vw;
    height: 350px;
    display: flex;
    background-image: url(${backgorund});
    background-size: cover;
    background-position: center;
    position: relative; 
`;

export const Info = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 40%;
    padding: 30px;
    justify-content: space-between;
    display: flex;
`;

export const Logo = styled.img`
  size: px;
`;