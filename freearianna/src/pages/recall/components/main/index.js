import React, { useState, useEffect } from "react";
import { AriannaMainWrap, UserList, PersonName, PersonFullName, LicenseString, ActionContent } from "./style/wrap";
import Container from "../../../../components/paper/container";
import { Card, Col, Row, Space } from "antd";
import CardTitle from "../../../../components/heading/card";
import ActionFormCard from "../../../takeAction/components/action/style/form-card";
import USAMap from "react-usa-map";
import states from "./states.json";
import { useDispatch, connect } from "react-redux";
import { findProfile } from "../../../../redux/action-creators/users";
import { Link, useNavigate } from "react-router-dom";
import state_address from "../../../profileview/components/hero2/address.json";
import P1 from "../../../../components/paragraph";
import _ from "lodash";
import axios from "axios";
import config from "../../../../config";

const AriannaMain = () => {
  // const color = "red"
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [usa, setUsa] = useState([]);
  const [recalls, setRecalls] = useState([]);
  const [userData, setUserData] = useState([]);
  const [something, setSomething] = useState({});
  useEffect(() => {
    setUsa(states);
    axios.get(config.base_url + "/api/getRecalls").then(resp => {
      setRecalls(resp.data.recalls);
    });
  }, [usa]);
  const mapHandler = async event => {
    const address = event.target.dataset.name;
    await dispatch(findProfile(address, setUserData));
    var result = state_address.filter(obj => obj.abbreviation == address);
    navigate("/profilelist/" + result[0].name, { state: address });
  };

  const statesCustomConfig = () => {
    let dictionary = Object.assign(
      {},
      ...recalls.map(x => ({
        [x.state]: {
          fill: "#CE3DAF",
        },
      }))
    );
    return dictionary;
    /*
       clickHandler: event =>
            console.log("Custom handler for NJ", event.target.dataset),
      */
  };

  return (
    <AriannaMainWrap>
      <Container>
        <Space direction="vertical" size={32} style={{ width: "100%" }}>
          <Row gutter={[32, 32]}>
            <Col lg={{ span: 14 }} span={24}>
              <ActionFormCard style={{ backgroundColor: "white" }}>
                <CardTitle style={{ marginBottom: 32 }}>
                  Ongoing Recalls
                  {usa && recalls && (
                    <USAMap
                      customize={statesCustomConfig()}
                      onClick={mapHandler}
                    />
                  )}
                </CardTitle>
              </ActionFormCard>
            </Col>
            <Col lg={{ span: 10 }} span={24}>
              <ActionFormCard>
                <CardTitle style={{ marginBottom: 32 }}>
                  <Link to="/create">Start Recall</Link>
                </CardTitle>

                {/* <CardTitle style={{ marginBottom: 32 }}>
                  {userData.map((person, index) => (
                    <UserList key={index}>
                      <img
                        src={person.user_avatar}
                        alt={person.name}
                        width={100}
                        height={100}
                        style={{
                          borderRadius: 200,
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ width: "100%" }}>
                        <div>
                          <h3>{person.full_name}</h3>
                          <P1></P1>
                          <P1>
                            {person.county},&nbsp;{person.state}
                          </P1>
                          <P1>Licence #: {person.license}</P1>
                          <P1>Case: {person.case_name}</P1>
                          <P1>{person.page_title}</P1>
                        </div>
                        <ActionContent>
                          {person.page_contents.slice(0, 200)}... ... ...
                        </ActionContent>
                      </div>
                      <div> </div>
                    </UserList>
                  ))}
                </CardTitle> */}

              </ActionFormCard>
            </Col>
          </Row>
        </Space>
      </Container>
    </AriannaMainWrap>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    findProfile: (address, setUserData) =>
      dispatch(findProfile(address, setUserData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AriannaMain);
