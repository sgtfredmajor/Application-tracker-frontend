import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/login";
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/signup";
  };

  return (
    <header style={headerStyle}>
      <div>
        <div style={h1Style}>AppTrack</div>
        <div style={links}>
          <Link style={login} onClick={handleClick} type="submit">
            Login
          </Link>
          <Link style={signUp} onClick={handleClick2} type="submit">
            Sign Up for Free
          </Link>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  background: "#e6e8ed",
  margin: "0",
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

const links = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginRight: "10px",
  paddingBottom: "10px",
};

const login = {
  borderRadius: "10px",
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  height: "20px",
  background: "none",
  border: "solid 2px #00adb5",
  color: "#00adb5",
  textDecoration: "none",
  padding: "0px 8px",
  paddingTop: "4px",
  position: "relative",
  marginRight: "5px",
};

const signUp = {
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  borderRadius: "10px",
  height: "20px",
  color: "white",
  backgroundColor: "#00adb5",
  border: "solid 2px #00adb5",
  textDecoration: "none",
  padding: "0px 8px",
  paddingTop: "4px",
  position: "relative",
};
export default Header;
