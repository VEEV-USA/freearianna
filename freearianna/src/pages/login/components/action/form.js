import React, { useState, useEffect } from "react";
import ActionFormCard from "./style/form-card";
import { Button, Checkbox, Form, Input, Progress, Space, message } from "antd";
import { snsClient } from "../../../../untils/aws";
import { SubscribeCommand } from "@aws-sdk/client-sns";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import config from "../../../../config";
const { Item, useForm } = Form;

const TakeActionForm = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkLogin() {
      const id = window.localStorage.getItem("@ari_id");
      if (id) {
        navigate("/dashboard");
      }
    }
    checkLogin();
  }, []);
  const onFinish = values => {
    setError(null);
    axios.post(config.base_url + `/login`, values).then(resp => {
      if (resp.data.status) {
        window.localStorage.setItem("@ari_id", resp.data.user._id);
        window.location.reload();
      } else {
        setError(resp.data.message);
      }
    });
  };

  return (
    <ActionFormCard>
      {!success ? (
        <Space direction="vertical" size={12} style={{ width: "100%" }}>
          <div>
            <Form
              layout="vertical"
              form={form}
              initialValues={{ require: true }}
              onFinish={onFinish}
            >
              <Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                  },
                ]}
              >
                <Input size="large" placeholder="Email" />
              </Item>
              <Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Enter Password",
                  },
                ]}
              >
                <Input size="large" placeholder="Password" />
              </Item>
              {error && (
                <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>
              )}
              <Item>
                <Button
                  type="primary"
                  size="large"
                  block
                  htmlType="submit"
                  loading={loading}
                  // disabled={!checked}
                >
                  <p style={{ textAlign: "center", color: "black" }}>Login</p>
                </Button>
              </Item>
            </Form>
          </div>
        </Space>
      ) : (
        <div></div>
      )}
    </ActionFormCard>
  );
};

export default TakeActionForm;
