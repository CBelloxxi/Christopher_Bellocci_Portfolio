import React from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ExternalLinks from '../../styles/GlobalComponents/ExternalLinks';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>Here's a look at some of my more recent projects.</SectionText>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
              <ExternalLinks href={visit}>Site</ExternalLinks>
              <ExternalLinks href={source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
