import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'BA in International Business Graduate', },
  { text: 'Le Wagon London Bootcamp Graduate'},
  { text: 'Changemaker of the Year Nomination', },
  { text: 'SocialXChange Award', },
  { text: 'Multiple Businesses Ventured', }
];

const Accomplishments = () => (
  <Section id="accomplishments">
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>🏆</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
