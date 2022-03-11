import styled from "styled-components";
import {Button} from "antd";

const CircleButton = styled(Button)`
  height: 40px;
  width: 40px;
  padding: 0;
  background-color: #CE3DAF;
  border-color: #CE3DAF;
  border-radius: 40px!important;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover, :focus, :active {
    background-color: #fb02c5;
    border-color: #fb02c5;
  }
`

export default CircleButton