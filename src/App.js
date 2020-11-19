import App_top_img from "./uview.jpg";
import img2 from "./deleta.png";
import './App.css';
const axios = require('axios');

//这个组件不属于练习项目组件
function App(res) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top_title clearfix">
          <div className="title_left tit">
            <a className="App-link" href="javascript:;">&nbsp;BIM</a>
          </div>
          <div className="title_middle tit">设计列表</div> 
          <div className="title_right tit"></div> 
        </div>
        <ul className="top_ul clearfix">
          <li>所有</li>
          <li>现代</li>
          <li>田园</li>
          <li>欧式</li>
          <li>美式</li>
          <li>中式</li>
          <li>日式</li>
          <li>北欧</li>
          <li>地中海</li>
          <li>东南亚</li>
          <li>简欧</li>
          <li>工业风</li>
          <li>简欧</li>
          <li>工业风</li>
          <li>...</li>
        </ul>
      </header>
      <div className="content">
        <ul className="content_ul">
          <li>
            <div className="content_ul_con">
              {/* <img src={require("uview.jpg”)} className="App_top_img" alt="App_top_img" /> */}
              <div className="content_ul_con_top">
                <span className="cadtit">CAD</span>
                <img src={App_top_img} className="App_top_img" alt="App_top_img" />
                <p><span className="ultop_title">测试</span>设计</p>
              </div>
              <div className="content_ul_con_bottom">
                <div className="content_ul_con_bottom_top">
                  <span>联系1</span>
                  <span>61.60m<sup>2</sup></span>
                </div>
                <div className="content_ul_con_bottom_middle">
                  <p>2020/11/09 17:34:23 修改</p>
                </div>
                <div className="content_ul_con_bottom_bottom">
                  <button className="openset" >打开设计</button>
                  <img src={img2} className="img2" alt="img2" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
