import React from 'react';
import './App.css';
import { Menu, Layout } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  HomeOutlined, 
  QuestionCircleOutlined, 
  DashboardOutlined, 
  UserOutlined,
  DesktopOutlined,
  PushpinOutlined,
  PoweroffOutlined
} from '@ant-design/icons/lib/icons';
import Header from "./components/Head";
import Foot from "./components/Footer";
import SideNav from "./components/SideNav";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";
import Router from './Router';

function App() {
  return (
    <Layout style={{ minHeight: '100vh', height: '100%', margin: 0, padding: 0 }}>
    {/* <div style={{display: 'flex', flexDirection: 'column', flex: 1, height: '100vh'}}> */}
      <Header />
      {/* <div style={{display: 'flex', flexDirection: 'row', flex: 1}}> */}
      <Layout style={{ minHeight: '100vh', height: '100%', margin: 0, padding: 0 }}>
        <SideNav />
        <Layout style={{ minHeight: '100vh', height: '100%', margin: 0, padding: 0 }}>
          <Router />
        </Layout>
      </Layout>
        <Layout style={{ minHeight: '100vh', height: '100%', margin: 0, padding: 0 }}>
          <Foot />
        </Layout>
      {/* </div> */}
     
    {/* </div> */}
    </Layout>
  );
}

export default App;
