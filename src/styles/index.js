import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  h1, h2,h3, h4, h5, h6, a, p, div, li, button {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
  
  a {
    color: #CE3DAF;
    font-weight: 500;
    :hover {
      color: #CE3DAF;
      text-decoration: underline;
    }
  }
  .ant-layout {
    background-color: #ffffff;

    .ant-layout-header {
      background-color: #CE3DAF;
      display: flex;
      align-items: center;
      padding: 0;
      height: 72px;
    }
    
    .ant-layout-footer {
      padding: 21px 0;
      display: flex;
      align-items: center;
    }
  }

  .ant-btn {
    &.ant-btn-primary {
      background-color: #f7ce07;
      border-color: #f7ce07;
      color: #000000;
      font-weight: bold;
    }
    &.ant-btn-link {
      color: #ffffff;
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 14px;
      padding: 0 8px;
      :hover, &.active {
        color: #f7ce07;
      }
    }
    &.ant-btn-text {
      color: #CE3DAF;
      font-weight: 500;
      font-size: 14px;
      padding: 0;
      :hover {
        color: #f7ce07;
        background: none;
      }
    }
    &.ant-btn-lg {
      height: 52px;
      font-size: 22px;
      letter-spacing: 1px;
      border-radius: 4px;
    }
  }
  
  .ant-input {
    &.ant-input-lg {
      height: 44px;
      border-radius: 4px;
      border-color: #eeeeee;
    }
  }
  
  .ant-menu{
    border-right: none;
    .ant-menu-item{
      font-size: 22px;
      height: 52px;
      display: flex;
      align-items: center;
      color: #CE3DAF;
      line-height: 1;
      margin-top: 0!important;
      :hover {
        color: #f7ce07;
      }
      &.ant-menu-item-selected {
        background-color: #CE3DAF;
        color: #ffffff;
      }
      &.btn {
        background-color: #f7ce07;
        border-radius: 40px;
        text-align: center;
        justify-content: center;
        font-weight: 600;
        margin-top: 32px!important;
        color: #000000;
        &.ant-menu-item-selected {
          background-color: #e3ba03;
          color: #000000;
        }
      }
    }
  }
  
  .ant-drawer {
    .ant-drawer-header{
      border-bottom: 0;
      box-shadow: 1px 1px 4px gray;
    }
  }
`

export default GlobalStyles