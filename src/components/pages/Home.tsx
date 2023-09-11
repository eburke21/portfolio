import React from 'react'
import { Image, Button, Row, Col } from 'antd';
import terminal from '../../assests/terminal.svg';
import { DownloadOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons/lib/icons';

const Home: React.FC = () => {
  return (  
    <div>
      <Row style={{ marginTop: '20px' }}>
        <Col span={12}>
          <h2>Hi, I'm</h2>
          <h1>Erin Burke</h1>
          <h3>Full-Stack Engineer</h3>
          <p>I'm a full-stack developer, most recently working on Rapid7's InsightCloudSec.</p>
        <p>I build websites and design intuitive workflows to solve complex challenges.</p>
      </Col>
      <Col span={12} style={{ marginTop: '80px' }}>
        <Image
            width={200}
            src={terminal}
          />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large'>
            Download Resume
          </Button>
          <Button type="primary" shape="round" icon={<LinkedinOutlined />} size='large' />
          <Button type="primary" shape="round" icon={<GithubOutlined />} size='large' />
        </Col>
      </Row>
    </div>
  );
};

export default Home;