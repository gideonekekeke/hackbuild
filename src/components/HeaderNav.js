import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineClose,
  AiFillHome,
  AiOutlinePlus,
  AiFillCaretDown,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import SideBar from "./SideBar";
import Show from "react-reveal/Fade";

const HeaderNav = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("Peter");

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <MainContainer>
      <Container>
        <Wrapper>
          <Logo />
          <Navigation>
            <Nav>
              <Icon>
                <AiFillHome />
              </Icon>
              <span>Home</span>
            </Nav>
            <Nav>
              <Icon>
                <AiFillHome />
              </Icon>
              <span>Home</span>
            </Nav>
            <Nav>
              <Icon>
                <AiFillHome />
              </Icon>
              <span>Home</span>
            </Nav>
          </Navigation>
        </Wrapper>
        <Part2>
          <Icons>
            <IoMdNotificationsOutline />
          </Icons>
          <Icons>
            <AiOutlinePlus />
            <AiFillCaretDown />
          </Icons>

          <Logo />
        </Part2>

        <MediaScreen>
          {toggle ? (
            <Close
              onClick={() => {
                console.log(toggle);
                onToggle();
              }}
            />
          ) : (
            <Menu
              onClick={() => {
                console.log(toggle);
                onToggle();
              }}
            />
          )}

          <Logo />
          <Bell />
        </MediaScreen>
      </Container>

      {/* {toggle ? (
        <SideBar text={text} toggle={toggle} setToggle={setToggle} />
      ) : null} */}

      <Show left when={toggle}>
        <SideBar />
      </Show>
    </MainContainer>
  );
};

export default HeaderNav;

const MediaScreen = styled.div`
  display: none;
  @media screen and (max-width: 1154px) {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    justify-content: space-between;
  }
`;

const Menu = styled(GiHamburgerMenu)`
  margin-left: 30px;
  cursor: pointer;
`;

const Close = styled(AiOutlineClose)`
  margin-left: 30px;
  cursor: pointer;
`;
const Bell = styled(IoMdNotificationsOutline)`
  margin-right: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icons = styled.div`
  font-size: 30px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Part2 = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1154px) {
    display: none;
  }
`;

const Icon = styled.div`
  margin-right: 5px;
`;

const Nav = styled.div`
  display: flex;
  margin: 0 5px;
  width: 130px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const Navigation = styled.div`
  display: flex;
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  margin: 0 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  /* justify-content: center; */
  align-items: center;

  @media screen and (max-width: 1154px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: coral;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
