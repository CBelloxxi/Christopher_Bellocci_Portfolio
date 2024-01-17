import React from 'react';
import { DiFirebase, DiReact, DiPhotoshop, DiTerminal } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br /><br />
    <SectionTitle>Technologies & Skills</SectionTitle>
    <SectionText>
      I've worked with a range of technologies and gained many skills in the Software and Web Development world.
      Design, Front-End to Back-end. Conception to Completion.
    </SectionText>
    <List>
    <ListItem>
      <DiReact size="4rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/> Javascript, Nextjs, Reactjs, Google API, Google Analystics, TailWindCSS & Vite.
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/> Ruby, Nodejs, MicrosoftSQL, MySQL, FireBaseDB, MongoDB Atlas, Azure & GitHub.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="4rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/> Figma, Miro, Canva & Adobe.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size="4rem"/>
        <ListContainer>
          <ListTitle>Soft Skills</ListTitle>
          <ListParagraph>
            Experience with <br/> International Business, E-Commerce, Digital Marketing, Sales, Fin-Tech, B2C, B2B, Contracting, Freelancing, Great Team Player, Great Communicator & Very Personable.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
