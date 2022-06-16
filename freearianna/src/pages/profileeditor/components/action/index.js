import React, { Fragment, useEffect, useState } from "react";
import TakeActionWrap from "./style/wrap";
import Wrap, { Wrap1 } from "./style/wrap";
import { Avatar, Card, Col, Row } from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import Container from "../../../../components/paper/container";
//import {Col, Row, Space} from "antd";
import TakeActionItem from "./item";
import Image1 from "../../../../assets/img/cynthialie.png";
import TakeActionForm from "./form";
import CardTitle from "../../../../components/heading/card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../../config";

const TakeActionContent = () => {
  const navigate = useNavigate();
  const [recalls, setRecalls] = useState([]);
  useEffect(() => {
    axios
      .post(`${config.base_url}/api/users/getRecallsByUser`, {
        userId: window.localStorage.getItem("@ari_id"),
      })
      .then(resp => {
        console.log(resp.data.recalls);
        setRecalls(resp.data.recalls);
      });
  }, []);
  return (
    <Fragment>
      <Wrap1>
        <Container>
          <Row gutter={[40, 52]}>
            <Col lg={{ span: 20 }} span={24}>
              <TakeActionForm />
            </Col>
            <Col lg={{ span: 4 }} span={24}>
              <h2>Submitted Recalls</h2>
              <br></br>
              {recalls.map(r => {
                return (
                  <div
                    key={r._id}
                    to={`/recallnow/${r.full_name}undefined`}
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/recallnow/" + r.full_name, { state: r });
                    }}
                  >
                    <P1>{r.full_name}</P1>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Wrap1>
    </Fragment>
  );
};

export default TakeActionContent;
