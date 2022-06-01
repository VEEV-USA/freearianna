import {Card, Select} from "antd";
import styled from "styled-components";

export const ActionFormCard = styled(Card)`
  min-height: 100%;
  box-shadow: none;
  border: none;
  background-color: #F7E3E4;
  border-radius: 12px;
  padding: 12px;
  h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 32px;
  }
  h3{
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  @media(max-width: 768px) {
    padding: 0;
  }
`

export const AntSelect = styled(Select)`
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 44px;
  }
`
