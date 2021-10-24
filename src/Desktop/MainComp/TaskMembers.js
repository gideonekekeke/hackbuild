import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { app } from "./../../base";

export const TaskMembers = ({ team }) => {
  const [teamData, setTeamData] = useState([]);

  const onGetData = async () => {
    await app
      .firestore()
      .collection("dataBaseUsers")
      .doc(team)
      .get()
      .then((myData) => setTeamData(myData.data()));
  };

  useEffect(() => {
    onGetData();
  }, [team]);

  return (
    <Container>
      <Wrapper>
        <Card>{teamData?.name} </Card>
      </Wrapper>
    </Container>
  );
};

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  background-color: red;
  margin: 5px;
`;
const Card1 = styled.div`
  font-size: 10px;
  width: 100px;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;
const Card = styled.div`
  font-size: 10px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: row;
`;
