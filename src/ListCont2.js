import React from 'react';
import './App_content.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, DatePicker, Select, version, message, Pagination, Avatar, Input, Image, Card, Tabs, List, Space, Radio, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import 'moment/locale/zh-cn';
const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;



//列表组件2
class ListCont2 extends React.Component {
    constructor(props) {
      super(props)
      
    }
    time = (date) => {
      let json_date = new Date(date).toJSON();
      return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    }
  
    render() {
      return <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          avatar={<Avatar src={this.props.imgurl} />}
          title={<a target="_blank" href={'https://bim.zhuxingyun.com/tool/design?id=' + this.props.listcon.id + '&tid=' + this.props.listcon.tid}>{this.props.listcon.name}——{this.time(this.props.listcon.updatedAt)}</a>}
          description={this.props.listcon.properties.comments}
          content={this.time(this.props.listcon.updatedAt)}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        />
      </List.Item>
    }
  }

 export default ListCont2