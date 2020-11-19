import React from 'react';
import './App_content.css';
import img2 from "./deleta.png";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, DatePicker, Select, version, message, Pagination, Avatar, Input, Image, Card, Tabs, List, Space, Radio, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import 'moment/locale/zh-cn';
const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;


//列表组件1
class ListCont extends React.Component{
    constructor(props) {
      super(props)
      this.state={
        lisc:this.props.listcon,
        lisin:this.props.listindex
      }
      
  
    }

    onMouseOver = (item) => {
      item.a = true;
      // this.forceUpdate();强制更新
      this.setState({
  
      })
    }
     onMouseOut = (item) => {
      item.a = false;
      // this.forceUpdate();
      this.setState({
  
      })
    }
    time = (date) => {
      let json_date = new Date(date).toLocaleString()
        return json_date;
    }
    remove = (index) => {
      console.log("删除第"+(index+1)+"个")
    }
     
    render(){
    return  <Col span={8} xs={24} sm={24} md={12} lg={8} xxl={6} key={this.props.listindex}>
          <li>
          <Card className="cardone">
              <div className="cartitle_top">
              <a target="_blank" onMouseOver={() => { this.onMouseOver(this.props.listcon) }} onMouseOut={() => { this.onMouseOut(this.props.listcon) }} href={'https://bim.zhuxingyun.com/tool/cad?id=' + this.props.listcon.id + '&tid=' + this.props.listcon.tid} className="cadtit">CAD</a>
              <Link to={{ pathname: "/listcon_detail/"+ this.props.dataid, state:{a:this.props.listcon,b:this.props.listindex}}}>
                  
                  <img className="cartitle_top_img block" src={this.props.listcon.a ? this.props.listcon.drawingpreviewurl : this.props.listcon.previewurl} />
  
                  <div className="cartitle">
                  <Avatar className="avarar1" src={this.props.headurl} />{this.props.dispname}&nbsp;设计
                  </div>
              </Link>
              </div>
              <div className="cartitle_bottom">
              <div className="content_ul_con_bottom_top">
                  <span>{this.props.listcon.name}</span>
                  <span>{this.props.listcon.properties.area}</span>
              </div>
              <div className="content_ul_con_bottom_middle">
                  <p>{this.time(this.props.listcon.updatedAt)}&nbsp;修改</p>
              </div>
              <div className="content_ul_con_bottom_bottom">
                  <a target="_blank" href={'https://bim.zhuxingyun.com/tool/design?id=' + this.props.listcon.id + '&tid=' + this.props.listcon.tid} className="openset" >打开设计</a>
                  <img onClick={()=>{this.remove(this.props.listindex)}} src={img2} className="img2" alt="img2" />
              </div>
              </div>
          </Card>
          </li>
      </Col>
    }
  }

  export default ListCont