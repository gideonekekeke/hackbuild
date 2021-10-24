import React from "react";
import styled from "styled-components";
import { app } from "./../../../base";

export const Test = () => {
  const [text, setText] = React.useState({});

  const [user, setUser] = React.useState([]);
  const [dataUser, setDataUser] = React.useState([]);

  const getData = async () => {
    await app
      .firestore()
      .collection("project")
      .onSnapshot((snapShot) => {
        const r = [];
        snapShot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setUser(r);
        console.log(user);
      });
  };

  const UserData = async () => {
    await app
      .firestore()
      .collection("dataBaseUsers")
      .onSnapshot((snapShot) => {
        const r = [];
        snapShot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setDataUser(r);
      });
  };

  const getIndividualData = async () => {
    await app
      .firestore()
      .collection("project")
      .doc()
      .get()
      .then((singleUser) => setUser(singleUser.data()));
  };

  React.useEffect(() => {
    getData();
    UserData();
    getIndividualData();
  }, [user]);

  return (
    <Container>
      <Wrapper>
        {dataUser?.map((props, i) => (
          <div>
            <div>{props.name}</div>
          </div>
        ))}
        {user?.map((props, i) => (
          <div>
            <div>{props.projectName}</div>
            <div>
              {props.team?.map((props) => (
                <div>{props.teamMember} </div>
              ))}
            </div>
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

const Div = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Button = styled.div`
  width: 300px;
  height: 60px;
  background-color: ${({ bg }) => bg};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainInputPass = styled.input`
  width: 300px;
  height: 50px;
  padding-left: 10px;
`;
const Wrapper = styled.div``;
const Container = styled.div``;
