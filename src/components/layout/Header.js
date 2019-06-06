import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const TitleHeader = styled.header`
  background: #201e1e;
  color: #fff;
  text-align: center;
  font-family: 'Monteserrat', sans-serif;
  padding: 10px;
  font-size: 48px;
  font-weight 800;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderLink = styled(Link)`
  font-family: 'Monteserrat', sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-align: center
  padding: 5px;
  text-decoration: none;
  color: #fff;
  :hover {
    background: linear-gradient(to right,#ff8a00,#da1b60);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;

export default function Header() {
  return (
    <>
      <TitleHeader>TODO LIST</TitleHeader>
      <LinkContainer>
        <HeaderLink to="/">Home</HeaderLink> 
        <HeaderLink to="/about">About</HeaderLink>
      </LinkContainer>
    </>
  )
}