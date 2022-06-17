import React, { Fragment } from "react";
import TakeActionContent from "../profileview/components/action";
import TakeActionHero2 from "../profileview/components/hero2";
import { useLocation } from "react-router-dom";

const ProfileList = () => {
  const location = useLocation();
  const person = location.state;
  return (
    <Fragment>
      <TakeActionHero2 person={person} />
      <TakeActionContent person={person} />
    </Fragment>
  );
};

export default ProfileList;
