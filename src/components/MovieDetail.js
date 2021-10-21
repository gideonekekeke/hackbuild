import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const game = useParams();
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    setMyData(data[id - 1]);
    console.log(myData);
    console.log(id);
    console.log("The Params:", game);
  }, []);

  return (
    <Container>
      <Background src={myData?.backgroundImg} />
      <Div />
      <Wrapper>
        <Title>{myData?.title} </Title>
        <Image src={myData?.titleImg} />

        <Sub>{myData?.subTitle} </Sub>
        <Desc>{myData?.description} </Desc>
      </Wrapper>
    </Container>
  );
};

export default MovieDetail;
const Image = styled.img`
  width: 500px;
  height: 300px;
  object-fit: contain;
`;

const Sub = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;
const Desc = styled.div`
  font-size: 20px;
  width: 700px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 60px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 90px;
  font-size: 30px;
  color: white;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  /* background-color: rgba(0, 0, 0, 0, 0.9); */
`;

const Background = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative;
  background: red;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
