import React, { useState, useEffect } from "react";
import ActionFormCard from "./style/form-card";
import { Button, Checkbox, Form, Input, Progress, Space, message } from "antd";
import { snsClient } from "../../../../untils/aws";
import { SubscribeCommand } from "@aws-sdk/client-sns";
import SectionTitle from "../../../../components/heading/section";
import LogoText from "../../../../layouts/styles/header/logo";
import Banner1 from "../../../../assets/img/arianna-poster300.jpg";
import { useDispatch } from "react-redux";
import { findSigner } from "../../../../redux/action-creators/users";

import { useNavigate } from "react-router-dom";

const { Item, useForm } = Form;

const TakeActionForm = ({ person, getUser }) => {
  console.log("working");
  const navigate = useNavigate();
  const person_id = person._id;
  const username =
    person.full_name.split(" ")[0] + person.full_name.split(" ")[1];

  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const [profileUsers, setProfileUsers] = useState([]);
  useEffect(() => {
    dispatch(findSigner(person_id, setProfileUsers));
  }, []);

  const finishHandler = data => {
    setLoading(true);
    //TODO: SNS SERVICE SETTINGS
    const params = {
      Protocol: "email",
      TopicArn: "arn:aws:sns:us-east-1:095719380237:freearianna",
      Endpoint: data.email,
    };

    snsClient
      .send(new SubscribeCommand(params))
      .then(res => {
        console.log(res, "SUCCESS");
      })
      .catch(err => {
        console.log(err, "ERROR");
        setSuccess(true);
      })
      .finally(() => {
        setLoading(false);
        form.resetFields();
      });

    const phoneParams = {
      Protocol: "sms",
      TopicArn: "arn:aws:sns:us-east-1:095719380237:freearianna",
      Endpoint: data.phone,
    };

    setLoading(true);
    snsClient
      .send(new SubscribeCommand(phoneParams))
      .then(res => {
        console.log(res, "SUCCESS");
        setSuccess(true);
      })
      .catch(err => {
        console.log(err, "ERROR");
      })
      .finally(() => {
        setLoading(false);
        form.resetFields();
      });
  };

  return (
    <ActionFormCard>
      {!success ? (
        <Space direction="vertical" size={24} style={{ width: "100%" }}>
          <Progress
            percent={(profileUsers.length / person.signatures_Require) * 100}
            strokeWidth={20}
            showInfo={false}
            strokeColor="#CE3DAF"
          />
          <p style={{ textAlign: "center" }}>
            {profileUsers.length} of {person.signatures_Require} signatures
          </p>
          <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            loading={loading}
            onClick={() => {
              navigate("/recallnow/" + person._id + "/" + person.full_name);
            }}

            //disabled={!checked}
          >
            <p style={{ textAlign: "center", color: "black" }}>Sign Petition</p>
          </Button>
        </Space>
      ) : (
        <div></div>
      )}
    </ActionFormCard>
  );
};

export default TakeActionForm;
