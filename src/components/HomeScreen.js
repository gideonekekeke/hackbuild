import React from "react";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigation>
          <Nav>
            <Icon></Icon>
            <span>Home Screen</span>
          </Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Icon = styled.div``;
const Nav = styled.div``;
const Navigation = styled.div``;
const Logo = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div``;
