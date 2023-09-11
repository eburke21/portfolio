import React from 'react'
import { Divider, List, Typography } from 'antd';

const rapid7 = [
  'Developed React components for new Save Filter functionality allowing the storage and reuse of filtering across the entire application',
  'Created E2E integration test suite in Selenium for Save Filter feature to identify  and remediate bugs',
  'Supported senior developers in InsightCloudSec front-end migration from Angular to React and in implementation of design system built on Ant Design',
  'Managed SaaS release by coordinating across engineering, QA and support teams to identify and resolve critical bugs using Jenkins and Allure'
]

const atlassian21 = [
  'Identified gaps in behavioral analytics tracking; led team of engineers in instrumenting pipelines and built KPI dashboards to communicate findings',
  'Developed wireframes and specs for new features of Trello-Slack integration to drive user engagement'
]

const atlassian20 = [
  'Conducted interviews, performed exploratory data analysis and reviewed feedback to create product requirements for new features in Jira-Confluence integration',
  'Created financial forecasting models to determine opportunity sizes for up-sell and cross-flow for all products in Atlassian ecosystem'
]

const Experience: React.FC = () => {
  return (  
    <div>
      <h4>Work Experience</h4>
      <Divider orientation='left'>Rapid 7</Divider>
      <List
        header={<div>Full Stack Engineer (May 2022 - Aug 2023)</div>}
        bordered
        dataSource={rapid7}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>item</Typography.Text> {item}
          </List.Item>
        )}
      />
      <Divider orientation='left'>Atlassian</Divider>
      <List
        header={<div>Associate Product Manager - Product Integrations (May 2021 - Aug 2021)</div>}
        bordered
        dataSource={atlassian21}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>item</Typography.Text> {item}
          </List.Item>
        )}
      />
      <List
        header={<div>Associate Product Manager - Confluence (May 2020 - Aug 2020)</div>}
        bordered
        dataSource={atlassian21}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>item</Typography.Text> {item}
          </List.Item>
        )}
      />
      
    </div>
  );
};

export default Experience;