import React from "react";
import HomeComponent from "../Home/HomeComponent";
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginComponent from "../Login/LoginComponent";
import RegisterComponent from "../Register/RegisterComponent";
import AdminComponent from "../Admin Panel/AdminComponent";
import DashboardComponent from "../Student/DashboardComponent";

function MainComponent() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/register" component={RegisterComponent} />
          <Route exact path="/admin" component={AdminComponent} />
          <Route exact path="/student" component={DashboardComponent} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default MainComponent;
