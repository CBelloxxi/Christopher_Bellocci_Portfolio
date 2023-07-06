import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey 👋🏽 there! <br />
        My names Christopher Bellocci. <br />
      </SectionTitle>
      <SectionText>
        I'm a Full Stack Developer specialising in languages such as; <br /> HTML, CSS, Javascript and Ruby. Including their frameworks like React, Node and Rails. I'm also Freelancer, Entrepreneur and Sales Enthusiast.
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/cbellocci/" }>Lets Connect</Button>
    </LeftSection>
  </Section>
);

export default Hero;
