import React, { Fragment, useEffect, useState } from "react";
import RecallHero from "./components/hero";
import RecallContent from "./components/action";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "../../config";

export const RecallPage = () => {
  const location = useLocation();
  const [person, setPerson] = useState(null);
  useEffect(() => {
    const id = location.pathname.split("/")[2];
    if (id) {
      axios.post(`${config.base_url}/api/users/profile`, { id }).then(resp => {
        setPerson(resp.data);
      });
    }
  }, []);
  return (
    <Fragment>
      {person ? (
        <div>
          <RecallHero person={person} />
          <RecallContent person={person} />
        </div>
      ) : (
        <h1
          style={{
            marginTop: 50,
            textAlign: "center",
          }}
        >
          Loading...
        </h1>
      )}
    </Fragment>
  );
};

export default RecallPage;
