import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey 👋🏽 there! <br />
        My name is <br /> Christopher Bellocci.
      </SectionTitle>
      <SectionText>
        I'm a Full Stack Developer specialising in languages & frameworks like; HTML, CSS, Javascript, Ruby, Reactjs, Nextjs, Nodejs and Ruby on Rails. <br /><br /> I'm also a Freelancer, Entrepreneur and Sales Enthusiast.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/cbellocci/', '_blank')}>Let's Connect</Button>
      <br />
    </LeftSection>
  </Section>
);

export default Hero;
