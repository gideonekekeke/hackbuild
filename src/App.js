import React from "react";
// import HomeScreen from "./components/HomeScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./AuthState/GlobalContext";
// import HeaderNav from "./components/HeaderNav";
// import MovieFile from "./components/MovieFile";
// import MovieDetail from "./components/MovieDetail";
// import APIData from "./components/APIData";
import { Hackerthon } from "./Hackerthon/Hackerthon";
import { Register } from "./Projects/Register/Register";
const App = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          {/* <HeaderNav /> */}
          <Switch>
            <Route path="/" exact component={Hackerthon} />
            <Route path="/register" exact component={Register} />
            {/* <Route path="/api" exact component={APIData} /> */}
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default App;

{
  /* <Route path="/api" exact component={APIData} />
        <Route path="/detail/:id" exact component={MovieDetail} />   */
}
