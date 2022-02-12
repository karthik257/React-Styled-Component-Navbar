import styled from "styled-components";

export const MainWrapper = styled.nav`
  position: relative;
  border: 2px solid black;
  height: 75px;
  box-sizing: border-box;
  background-color: black;
`;

export const Logo = styled.img`
  position: absolute;
  height: 50px;
  width: 50px;
  top: 10px;
  padding-left: 1em;
  @media (max-width: 680px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  position: absolute;
  right: 0px;
  padding-right: 1em;
  top: 20px;
  box-sizing: border-box;
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 0.5em;
  box-sizing: border-box;
  background: #01bcd4;
  font-size: 20px;
  margin: 0.8em;
  @media (max-width: 680px) {
    font-size: 12px;
  }
`;
