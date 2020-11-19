import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContent from './App_content';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');



/* 只能放一个组件 */
ReactDOM.render(
  <AppContent />,
  document.getElementById('root')
);

reportWebVitals();
