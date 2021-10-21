import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import rainny from "./rainny.gif";
import sunny from "./sunny.gif";
import cloudy from "./cloudy.gif";

const APIData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [user, setUser] = useState([]);
  const [text, setText] = useState("");

  const [weatherSearch, setWeatherSearch] = useState("Lagos");
  const [weather, setWeather] = useState({});

  const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch}&appid=36e166465dbd63c7d02282ffb365ef12`;

  const convert = () => {
    const deg = "";
  };

  const getData = async () => {
    await fetch(urlAPI)
      .then((race) => race.json())
      .then((sam) => setUser(sam));
  };

  const axiosData = async () => {
    const res = await axios.get(urlAPI);
    if (res) {
      setWeather(res.data);
    }
  };

  useEffect(() => {
    getData();
    axiosData();
  }, []);
  return (
    <Container>
      <Holder>
        <Input
          placeholder="Search for UserName"
          value={weatherSearch}
          onChange={(e) => {
            setWeatherSearch(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            axiosData();
          }}
        >
          Search{text}
        </Button>
      </Holder>
      <Wrapper>
        <Card>
          <div>{weather?.sys?.country}</div>
          <Content>
            <Name>{weather?.name}</Name>
            <span>{""}</span>
          </Content>
          <div>{Math.ceil(weather?.main?.temp - 273.15)}°C</div> *
          {Math.ceil(weather?.main?.temp - 273.15) >= 24 ? (
            <Image src={sunny} />
          ) : Math.ceil(weather?.main?.temp - 273.15) < 24 ||
            Math.ceil(weather?.main?.temp - 273.15) < 19 ? (
            <Image src={cloudy} />
          ) : Math.ceil(weather?.main?.temp - 273.15) < 18 ? (
            <Image src={rainny} />
          ) : null}
        </Card>
      </Wrapper>
    </Container>
  );
};

export default APIData;

const Holder = styled.div`
  display: flex;
`;
const Button = styled.div`
  margin-left: 10px;
  height: 40px;
  width: 100px;
  background-color: red;
  border-radius: 5px;
  transition: all 350ms;
  transform: scale(1);
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
`;

const Image = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  background-color: red;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
const Content = styled.div``;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: powderblue;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 100px;
`;
