import React, { Fragment, useEffect, useState } from "react";
import CreateHero from "./components/hero";
import CreateContent from "./components/action";

export const CreatePage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const id = window.localStorage.getItem("@ari_id");
    setUser(id);
  }, []);
  return (
    <Fragment>
      <CreateHero />
      <CreateContent />
    </Fragment>
  );
};

export default CreatePage;
