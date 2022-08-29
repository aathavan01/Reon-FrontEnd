import React from "react";
import UserAside from "./components/Aside";
import Footer from "./components/Footer";
import UserHeader from "./components/UserHeader";
import UserRightSide from "./components/UserRightSideAd";

function UserMain() {
  return (
    <>
      <UserHeader/>
      <UserAside/>
      <UserRightSide/>
      <Footer/>
    </>
  );
}

export default UserMain;
