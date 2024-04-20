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
    margin-left: 30px;
    margin-right: 30px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: visible;
`;

export const LogoDiv = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
`;