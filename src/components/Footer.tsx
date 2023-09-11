import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

const Foot: React.FC = () => {
  return (  
    <Footer style={{ 
      position: 'fixed',
      bottom: '0',
      width: '100%',
      textAlign: 'center',
      margin: 0,
      padding: 0
    }}>Erin Burke ©2021</Footer>

  //     <div style={{
  //       height: 60, 
  //       backgroundColor: 'lightgray', 
  //       color: 'black', 
  //       display: 'flex', 
  //       justifyContent: 'center', 
  //       alignItems: 'center', 
  //       fontWeight: 'bold'}}>
  //   Built with React, Ant Design + Typescript
  // </div>
  );
};

export default Foot;