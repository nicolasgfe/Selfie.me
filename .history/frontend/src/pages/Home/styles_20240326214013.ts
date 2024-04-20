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
`;

export const Login = styled.div`
    position: absolute;
    top: 50%;
    right: 80%;
    width: 50px;
    height: 30px;
    display: flex;
`;
