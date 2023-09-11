import React from 'react'
import { Image } from 'antd';
import headshot from '../../assests/erin_headshot.jpg';

const About: React.FC = () => {
  return (  
    <div>
      <Image
        width={200}
        src={headshot}
      />
      <h1>Hi, I'm Erin Burke</h1>
      <p>I'm a full-stack developer primarily working with React, Typescript, Python.</p>
    </div>
  );
};

export default About;