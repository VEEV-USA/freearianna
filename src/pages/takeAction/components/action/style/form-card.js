import {Card} from "antd";
import styled from "styled-components";

const ActionFormCard = styled(Card)`
  min-height: 100%;
  box-shadow: none;
  border: none;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 12px;
  h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 32px;
  }
  @media(max-width: 768px) {
    padding: 0;
  }
`

export default ActionFormCard