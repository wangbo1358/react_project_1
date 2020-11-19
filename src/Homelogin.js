import React from 'react';
import './App_content.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, DatePicker, Select,Spin, version, message, Pagination, Avatar, Input, Image, Card, Tabs, List, Space, Radio, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import 'moment/locale/zh-cn';
import { UserOutlined } from '@ant-design/icons';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Password from 'antd/lib/input/Password';
const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;


class Homelogin extends React.Component{
    constructor(props){
       super(props)
       this.state={
           username:"",
           password:""
       }
    }
    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    inputChange2=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    Logincon = () => {
        console.log(this.state.username)
        let _this = this
        console.log(_this.state.username)
        window.uyun.env = 'prod';
        window.uyun.api.authenticateMobileUser(_this.state.username, _this.state.password, function (err, result1) {
         
          if(result1.token!=undefined){
              alert("登陆成功！");
              window.uyun.util.setToken(result1.token);
              _this.props.history.push("./");
          }else{
            alert("账号密码不正确！请重新输入！");
            return false;
          }
        });
      }

    render(){
        return(
            <div className="login_content">
                <Card
                className="login_content_card"
                    hoverable
                >
                    <span className="login_title">登陆</span>
                    <div className="login_top">
                        <span>请输入账号：</span>
                        <Input className="username" onChange={this.inputChange}  placeholder="请输入用户名" prefix={<UserOutlined />} />
                    </div>
                    <div className="login_bottom">
                        <span>请输入密码：</span>
                        <Input.Password className="password" onChange={this.inputChange2}  placeholder="请输入您的密码" />
                    </div>
                    <Button onClick={()=>{this.Logincon()}} className="login_btn" type="primary">登陆</Button>
                    
                </Card>
            </div>
        )
    }
}

export default Homelogin