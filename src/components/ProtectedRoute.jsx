import React from "react";
import { Route, Link } from "react-router-dom";
import { LoginConsumer } from "../context/LoginContext";
import { LogoImage, DefaultMain, Centered } from '../components/styled';
import logo_transparent from '../images/logo_transparent.png';
import {  LogoImageLogin } from './styled';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <LoginConsumer>
    {({ user }) => {
      return (
      
        <Route
          render={(props) => {
            return user.status ? (
              <Component {...props} {...user} />
            ) : (
              <>
              <header style={headerStyle}>
                <div style={h1Style}>AppTrack</div>
                
              </header>
              <Centered>
              <DefaultMain>
                <div>
                  <div>
                <Link to="/login" style={linkStyle}>
                <p style ={altpstyle}>Click Here: Return To Login</p>
                </Link>
                </div>
                <div style={centerDiv}>
                <p>Logged out!</p>
                </div>
                <div>
                <LogoImageLogin>
                 <img style={img} src={logo_transparent} alt="App Track"></img>
                </LogoImageLogin>
                </div>
                </div>
                </DefaultMain>
                </Centered>
              </>
            );
          }}
          {...rest}
        />
      );
    }}
  </LoginConsumer>
);
const linkStyle = {
  color: "#00adb5",
  textDecoration: "none",
};
const h1Style = {
  margin: "0",
  display: "flex",
  flexDirection: "row",
  flexGrow: "0",
  alignItems: "center",
  height: "50px",
  marginLeft: "30px",
  fontSize: "36px",
  fontFamily: "Comfortaa, cursive",
  color: "#00adb5",
};
const headerStyle = {
  background: "#e6e8ed",
  margin: "0",
};
const altpstyle = {
  marginLeft: "28%",
}
const img = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};
const centerDiv = {
  marginLeft: '33%',
  marginRight: 'auto',
  fontSize: "25px",
  fontFamily: "Comfortaa, cursive",
  color: "#00adb5",
  display: "flex",
  flexDirection: "row",
  flexGrow: "0",
  textAlign: "center",
  };
  
export default ProtectedRoute;
