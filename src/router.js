import React from 'react';
import './App_content.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, DatePicker, Select, version, message, Pagination, Avatar, Input, Image, Card, Tabs, List, Space, Radio, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import 'moment/locale/zh-cn';
const { Meta } = Card;




//路由组件
class Routrcs extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isActivename: "top_active",
        value: 1,
      }
    }
    onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    };
    render() {
      console.log(this.props.datacont)
      return (
        <ul className="top_qh">
          <li className="">
            <Link to={{ pathname: "/", state: this.props.datacont }}  ><Button type="primary">卡片视图</Button></Link>
          </li>
          <li className="">
            <Link to='/login'><Button type="primary">列表视图</Button></Link>
          </li>
        </ul>
      )
    }
  }


  export default Routrcs;