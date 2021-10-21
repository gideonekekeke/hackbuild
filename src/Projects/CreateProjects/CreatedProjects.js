import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineUserRemove } from "react-icons/hi";
import place from "../projects.jpg";
import { app } from "../../base";

export const CreatedProjects = () => {
  const [team, setTeam] = React.useState([{ teamMember: "" }]);
  const [data, setData] = useState([]);
  const [img, setImg] = React.useState(place);
  const [projTitile, setProjTitle] = useState("");
  const [projDesc, setProjDesc] = useState("");
  const [projDeadLine, setProjDeadLine] = useState("");
  const imgUpload = async (e) => {
    const File = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(File.name);
    await fileRef.put(File);
    console.log(File);
    setImg(await fileRef.getDownloadURL());
  };

  const addTeamMember = (i, e) => {
    const values = [...team];
    values[i][e.target.name] = e.target.value;
    setTeam(values);
  };

  const onSubmit = (e) => {
    console.log(team);
  };

  const addMore = () => {
    setTeam([...team, { teamMember: "" }]);
  };
  const removeMore = (i) => {
    const values = [...team];
    values.splice(i, 1);
    setTeam(values);
  };

  const getData = async () => {
    await app
      .firestore()
      .collection("dataBaseUsers")

      .onSnapshot((snap) => {
        const i = [];
        snap.forEach((doc) => {
          i.push(doc.data());
        });
        setData(i);
      });
  };

  const UploadData = async (i, e) => {
    await app.firestore().collection("pushing").doc().set({
      img,
      projTitile,
      projDesc,
      projDeadLine,
      team,
    });
  };

  useEffect(() => {
    getData();
    console.log("this iscgjn", data);
  }, []);
  return (
    <Container>
      <Wrapper>
        <Header>Create a new Project</Header>

        <Card>
          <InputCard>
            <Image src={img} />
            <Label htmlFor="pix">Upload tthe project Image</Label>
            <ImageInput type="file" id="pix" onChange={imgUpload} />
          </InputCard>
          <InputCard>
            <InputHolder>
              <MainLabel>Project Title</MainLabel>
              <MainInput
                onChange={(e) => {
                  setProjTitle(e.target.value);
                }}
                placeholder="Project Title"
              />
            </InputHolder>
            <InputHolder>
              <MainLabel>Project Description</MainLabel>
              <MainInput
                onChange={(e) => {
                  setProjDesc(e.target.value);
                }}
                placeholder="Project Description"
              />
            </InputHolder>
            <InputHolder>
              <MainLabel>Project Deadline</MainLabel>
              <MainInput
                onChange={(e) => {
                  setProjDeadLine(e.target.value);
                }}
                placeholder="Project Deadline"
              />
            </InputHolder>
            <InputHolder>
              <MainLabel>Project Team Members</MainLabel>
              {team?.map((props, i) => (
                <MapMember>
                  <MainInput
                    placeholder={`Team member ${i + 1}`}
                    name="teamMember"
                    value={props.teamMember}
                    onChange={(e) => {
                      addTeamMember(i, e);
                    }}
                  />
                  {team.length > 6 ? null : (
                    <Icons onClick={addMore} cl="green">
                      <AiOutlineUsergroupAdd />
                    </Icons>
                  )}
                  {team.length > 1 ? (
                    <Icons onClick={removeMore} cl="red">
                      <HiOutlineUserRemove />
                    </Icons>
                  ) : null}
                </MapMember>
              ))}
            </InputHolder>
          </InputCard>
        </Card>
        <ButtonHolder>
          <Add onClick={UploadData}>Add Project</Add>
        </ButtonHolder>
      </Wrapper>
    </Container>
  );
};

const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Icons = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: ${({ cl }) => cl};

  :hover {
    cursor: pointer;
  }
`;

const MapMember = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
`;
const MainInput = styled.input`
  width: 92%;
  height: 40px;
  padding-left: 10px;
  margin-top: 10px;
  outline: none;
  border: 2px solid #004080;
  border-radius: 5px;

  ::placeholder {
    font-family: Raleway;
  }
`;

const MainLabel = styled.label`
  color: #004080;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1.2px;
`;

const InputHolder = styled.div`
  flex-direction: column;
  display: flex;
  margin-top: 20px;
  width: 500px;

  @media screen and (max-width: 800px) {
    width: 280px;
  }
`;

const InputCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  background-color: red;
`;
const ImageInput = styled.input`
  display: none;
`;

const Label = styled.label`
  background-color: #004080;
  padding: 5px 10px;
  border-radius: 20px;
  height: 30px;
  color: white;
  transition: all 350ms;
  transform: scale(1);
  display: flex;
  align-items: center;
  margin-top: 10px;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const Add = styled.div`
  color: #004080;
  font-size: 20px;
  font-weight: bold;
  width: 80%;
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
  transition: all 350ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin-top: 50px;
  border-radius: 5px;

  :hover {
    background-color: #004080;
    color: white;
    cursor: pointer;
  }
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
const Color = styled.div`
  width: 100%;
  height: 60%;
  background-color: rgba(232, 188, 102, 0.3);
`;
const MinCard = styled.div`
  width: 300px;
  height: 300px;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
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
  padding-bottom: 40px;
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
