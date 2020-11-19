import React from 'react';
import './App_content.css';
import Routelist from './router';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import  FrontendAuth  from './FrontendAuth'
import routerConfig from "./routerconfig"
import { Button, DatePicker, Select, version, message, Pagination, Avatar, Input, Image, Card, Tabs, List, Space, Radio, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import 'moment/locale/zh-cn';
const { Meta } = Card;



class App_content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemList: [],
      itemList1: [],
      selectdata: "所有"
    }

  }

  
  render() {
    return (
      <Router>
        <div className="App" >
          <div className="content">
            <Switch>
              {/* <Route path="/" exact auth={true} component={Content1}></Route>
              <Route path="/login" auth={true} component={Login}></Route>
              <Route path="/info" auth={true} component={Info}></Route>
              <Route path="/homelogin" component={Homelogin}></Route> */}
              <FrontendAuth routerConfig={routerConfig}></FrontendAuth>
            </Switch>
          </div>
          <div className="app_bottom">
              <a target="_blank" href="https://zhuxingyun.com/">上海筑星云计算技术有限公司</a><span>版权所有 © 2017-2020</span>
          </div>
        </div>

      </Router>

    );
  }
}

export default App_content;