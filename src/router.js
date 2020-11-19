import React from 'react';
import './App_content.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, DatePicker, Select, version,Modal, Card, Tabs, List, Space, Radio, Row, Col, Divider } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import 'moment/locale/zh-cn';
const { Meta } = Card;




//路由跳转组件
class Routrcs extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isActivename: "top_active",
        value: 1,
        visible: false
      }
    }
    
    
    showModal = () => {
      this.setState({
        visible: true,
      });
      this.confirm();
    };

  
   confirm = () =>{
     let _this=this
    Modal.confirm({
      title: '退出登录',
      icon: <ExclamationCircleOutlined />,
      content: '您确定要退出登录吗？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        _this.setState({
          visible: false,
        });
        window.uyun.util.setToken("");
        // debugger
        _this.props.history.push("/homelogin")
      },
      onCancel() {
        _this.setState({
          visible: false,
        })
      },
      visible:_this.state.visible
    });
  }

    render() {
      console.log(this.props.datacont)
      return (
        <div>
          <ul className="top_qh">
            <li className="">
              <Link to={{ pathname: "/", state: this.props.datacont }}  ><Button type="primary">卡片视图</Button></Link>
            </li>
            <li className="">
              <Link to='/listview'><Button type="primary">列表视图</Button></Link>
            </li>
            <li className="exitlogin"><Button onClick={()=>{this.showModal()}} type="primary">退出登录</Button></li>
          </ul>
        </div>
        
      )
    }
  }


  export default Routrcs;