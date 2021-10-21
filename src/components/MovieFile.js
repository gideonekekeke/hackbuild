import React from "react";
import styled from "styled-components";
import data from "./data.json";
import { Link } from "react-router-dom";

const MovieFile = () => {
  console.log(data);
  return (
    <Container>
      <Wrapper>
        {data?.map((mayowa, i) => (
          <Card key={i} to={`/detail/${mayowa.myId}`}>
            <Image src={mayowa.cardImg} />
            <Div />

            <Name>{mayowa.title}</Name>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MovieFile;

const Name = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  padding-bottom: 10px;
  color: white;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 10px;
  transition: all 350ms;
  opacity: 0;
  flex-direction: column;

  :hover {
    opacity: 1;
  }
`;
const Div = styled.img`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  border-radius: 10px;
  transition: all 350ms;

  :hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled(Link)`
  width: 450px;
  height: 500px;
  background-color: lightgray;
  border-radius: 10px;
  position: relative;
  transition: all 350ms;
  transform: scale(1);
  margin: 10px;

  :hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.6);
  }
`;
