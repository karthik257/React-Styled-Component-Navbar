import React from "react";
import { MainWrapper, Logo, LinkContainer, Link } from "./Navbar.styled.js";

function Test() {
  return (
    <>
      <MainWrapper>
        <Logo src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"></Logo>
        <LinkContainer>
          <Link href="https://www.google.com" target="_blank">
            Google
          </Link>
          <Link href="https://www.masaischool.com">Masai</Link>
        </LinkContainer>
      </MainWrapper>
    </>
  );
}

export default Test;
