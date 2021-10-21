import React, { useState } from "react";
import styled from "styled-components";

const SideBar = ({ text, toggle, setToggle }) => {
  console.log(toggle);
  return (
    <Container>
      <Wrapper
        onClick={() => {
          setToggle(false);
          // console.log(toggle);
        }}
      >
        Sider{" "}
      </Wrapper>
      <Wrapper
        onClick={() => {
          setToggle(false);
          // console.log(toggle);
        }}
      >
        Sider{" "}
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: none;
  @media screen and (max-width: 1154px) {
    background-color: coral;
    width: 100%;
    height: 80vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10px;
    position: absolute;
    /* top: 100px; */
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  /* margin: 20px; */
  border-top: 2px solid rgba(255, 255, 255, 0.4);
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
