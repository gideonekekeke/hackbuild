import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../../base";

const TestProd = ({ teamMember }) => {
  const [userData, setUserData] = useState([]);

  // console.log(teamMember);

  // const id = props.teamMember;

  const fetchData = async () => {
    await app
      .firestore()
      .collection("dataBaseUsers")
      .doc(teamMember)
      .get()
      .then((el) => {
        setUserData(el.data());
      });

    console.log("Thisghjfy: ", userData);
  };

  useEffect(() => {
    fetchData();
    console.log("Thi: ", userData);
  }, [teamMember]);
  return (
    <>
      <Desc>{userData.email}</Desc>
      <ImgUser src={userData.avatar} />
    </>
  );
};

export default TestProd;
const Desc = styled.div`
  margin: 0 10px;
  padding-bottom: 10px;
`;

const ImgUser = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50px;
`;
