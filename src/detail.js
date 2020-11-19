import React from 'react';
import './App_content.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, DatePicker, Select, version, message, Pagination, Avatar, Input, Image, Card, Tabs, List, Space, Radio, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import moment from 'moment';
import 'moment/locale/zh-cn';
const { Meta } = Card;

const { Search } = Input;
const { Option } = Select;
function onChange(value) {
  console.log(`selected ${value}`);
}
function onBlur() {
  console.log('blur');
}
function onFocus() {
  console.log('focus');
}
function onSearch(val) {
  console.log('search:', val);
}
function callback(key) {
  console.log(key);
}
moment.locale('zh-cn');

//详情页组件
class Info extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        itemList: [],
        itemList1: [],
        propdata2: this.props.location.state.a,
        propdata: [],
        proname:"",
        proid:"",
        procar:this.props.location.state.a.category
      }
    }
    componentWillMount = () => {
      let _this = this
      if(_this.props.location.state.a.id!=null && _this.props.location.state.a.id!=undefined){
        window.uyun.api.getDesign(_this.props.location.state.a.id, (err, result3) => {
          console.log(result3)
          if (result3!=null&&result3!=undefined) {
            _this.setState({
              propdata: result3,
              proname:result3.name,
              procar:result3.category,
              proid:result3.id
            })
          }
          })
      }
      
    }
  //保存
    Preservation=()=>{
      console.log(this.state.proid)
      let _this = this
      window.window.uyun.api.updateDesign(this.state.propdata.id, {name: this.state.proname},(err, result) =>{
        debugger
        console.log(_this.state.proname);
        if (result!=null&&result!=undefined) {
          alert("提交成功!");
        }else{
          alert("提交失败!");
        }
      })
      
    }
    inputChange=(e)=>{
      this.setState({
        proname:e.target.value
      })
    }
    Selectchange=(value)=>{
        // console.log(`selected ${value}`);
        console.log(value);
    }
    render() {
      console.log(this.state.procar)
      return (
        <div>
          <Link to='/'><Button type="primary">返回</Button></Link>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="关联信息"
            extra={<a href="#"></a>}
          >
            <div className="sjlist">
              <span className="sjlname">
                项目
          </span>
              <Select
                showSearch
                style={{ width: "79%" }}
                placeholder="单击进行搜索选择"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {/* <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option> */}
              </Select>
            </div>
          </Card>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="基本信息"
            extra={<a href="#"></a>}
          >
            <div className="sjlist">
              <span className="sjlname">
                名称
          </span>
              <Input placeholder="" value={this.state.proname} onChange={this.inputChange} />
            </div>
  
            <div className="sjlist">
              <span className="sjlname">
                类型
              </span>
              <Select onChange={this.Selectchange} defaultValue={this.state.procar} style={{ width: "79%" }} allowClear>
                <Option value="户型">户型</Option>
                <Option value="样板间">样板间</Option>
                <Option value="bim-design">设计</Option>
              </Select>
            </div>
  
            <div className="sjlist">
              <span className="sjlname">
                分享状态
          </span>
              <Select defaultValue="lucy2" style={{ width: "79%" }} allowClear>
                <Option value="其他人可编辑">其他人可编辑</Option>
                <Option value="其他人可复制">其他人可复制</Option>
                <Option value="其他人可读">其他人可读</Option>
                <Option value="lucy2">私有</Option>
              </Select>
            </div>
  
            <div className="sjlist2 clearfix">
              <span className="sjlname">
                预览
          </span>
              <div className="sjk">
                {/* <img src="" /> */}
                <Button className="bottom_btn" type="primary" size={"Default"}>
                  预览
            </Button>
              </div>
            </div>
          </Card>
          <Button onClick={()=>{this.Preservation()}} className="bottom_btn" type="primary" size={"large"}>
            保存
          </Button>
        </div>
      )
    }
  }


  export default Info;