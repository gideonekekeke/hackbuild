import React from "react";
import styled from "styled-components";
import { AiFillFileAdd, AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
export const HackerthonProject = () => {
  return (
    <Container>
      <TopHolder>
        <MainHolder>
          <SiderBar>
            <Icon1>
              {" "}
              <AiOutlineSearch />{" "}
            </Icon1>
            <Input placeholder="Enter" />
          </SiderBar>
          <AvatarHolder>
            <Icon dot="red">
              <BiHelpCircle />
            </Icon>
            <Icon>
              {" "}
              <IoMdNotificationsOutline /> <Dot dot="coral" />
            </Icon>
            <Name>Peter</Name>
            <Image />
          </AvatarHolder>
        </MainHolder>
      </TopHolder>

      <ProjectTitle>Projects</ProjectTitle>
      <Wrapper>
        <Card>
          <span>List of Projects</span>
          <AddButton>
            <IconHolder>
              <AiFillFileAdd />
            </IconHolder>
            <Icons>Add Project</Icons>
          </AddButton>
        </Card>

        <Card>Projects</Card>
        <Card>On Going</Card>
        <Card>Completed</Card>
      </Wrapper>
    </Container>
  );
};

const ProjectTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 30px;
`;

const MainHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* justify-content: center; */
  /* flex-wrap; */

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
const TopHolder = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-left: 10px;
  justify-content: center;
  font-size: 30px;
  width: 90%;
  /* background: red; */
`;
const SiderBar = styled.div`
  display: flex;
  background-color: white;
  width: 300px;
  height: 40px;
  align-items: center;
  border-radius: 3px;

  @media screen and (max-width: 1000px) {
    width: 280px;
  }
`;
const Icon = styled.div`
  margin: 0 10px;
  position: relative;
  color: ${({ dot }) => dot};
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ dot }) => dot};
  position: absolute;
  top: 3px;
  right: 2px;
`;

const Icon1 = styled.div`
  margin: 0 10px;
  margin-top: 5px;
`;
const Input = styled.input`
  outline: none;
  border: 0;
  font-size: 18px;

  ::placeholder {
    font-family: Raleway;
  }
`;

const AvatarHolder = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  /* background: blue; */

  @media screen and (max-width: 1000px) {
    display: flex;
    margin-top: 15px;
  }
`;
const Name = styled.div`
  font-size: 17px;
  font-weight: bold;
`;
const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  background-color: lightgreen;
  margin-left: 10px;
`;

const IconHolder = styled.div`
  padding-left: 50px;
  margin-right: 50px;
`;

const Icons = styled.div`
  font-weight: bold;
  opacity: 0;
  transition: all 350ms;

  :hover {
    opacity: 1;
  }
`;

const AddButton = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 50px;
  background-color: rgba(239, 240, 175, 0.3);
  font-size: 30px;
  transition: all 350ms;
  /* font-weight: bold; */

  :hover {
    background-color: rgba(239, 240, 175, 0.9);
    cursor: pointer;
  }
`;
const Card = styled.div`
  width: 400px;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
  height: 550px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  @media screen and (max-width: 1000px) {
    width: 300px;
    margin: 20px 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
// const Container = styled.div``
