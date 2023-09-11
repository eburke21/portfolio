import React from 'react'
import { Layout,  Button, Row, Col } from 'antd';
import { DownloadOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons/lib/icons';

const { Header } = Layout;

const Head: React.FC = () => {
  return ( 
    <Header style={{ padding: 0, background: 'lightgray', margin: 0, width: '100%' }}>
      <Row>
        <Col span={20}>
          <h2>Erin Burke</h2>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}} span={4}>
          <Button type="primary" shape="round" icon={<LinkedinOutlined />} size='large' />
          <Button type="primary" shape="round" icon={<GithubOutlined />} size='large' />
        </Col>
      </Row>
    </Header>

  );
};

export default Head;