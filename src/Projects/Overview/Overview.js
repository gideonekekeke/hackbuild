import React, { useState, useEffect, useContext } from "react";
import { HiCubeTransparent } from "react-icons/hi";
import styled from "styled-components";
import { GlobalContext } from "../../AuthState/GlobalContext";
import { app } from "../../base";
import TestProd from "../TestProd/TestProd";

export const Overview = () => {
  const [data, setData] = useState([]);
  // const { current, currentData } = useContext(GlobalContext);
  // console.log(current);
  const getProject = async () => {
    await app
      .firestore()
      .collection("pushing")
      .onSnapshot((snap) => {
        const i = [];
        snap.forEach((doc) => {
          i.push(doc.data());
        });
        setData(i);
      });
  };

  useEffect(() => {
    getProject();
    console.log("grhsnhdxfnj", data);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Header>Project Listed </Header>
        <Add>Add a Project</Add>
        <CardHolder>
          {data.map(({ id, img, projTitile, team }) => (
            <Card key={id}>
              <MinCard>
                <Color src={img} />
                <Title>{projTitile}</Title>
                <div>team members</div>
                {team.map(({ id, teamMember }) => (
                  <>
                    <TestProd id={id} teamMember={teamMember} />
                  </>
                ))}
              </MinCard>
            </Card>
          ))}
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

const CardHolder = styled.div`
  display: flex;
`;

const Add = styled.div`
  color: #004080;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
  transition: all 350ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  :hover {
    background-color: #004080;
    color: white;
    cursor: pointer;
  }
`;

const Desc1 = styled.div`
  margin: 0 10px;
  padding-bottom: 10px;
`;
const Desc = styled.div`
  margin: 0 10px;
  padding-bottom: 10px;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 30px;
  padding-top: 30px;
  margin-bottom: 50px;
`;
const Title = styled.div`
  padding: 20px 30px;
  flex: 1;
`;
const Color = styled.img`
  width: 100%;
  height: 60%;
  background-color: rgba(232, 188, 102, 0.3);
  object-fit: cover;
`;
const MinCard = styled.div`
  width: 250px;
  /* height: 300px; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 5px;
  transition: all 350ms;
  transform: scale(1);
  overflow: hidden;
  margin: 10px;
  display: flex;
  flex-direction: column;

  :hover {
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 40px;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
