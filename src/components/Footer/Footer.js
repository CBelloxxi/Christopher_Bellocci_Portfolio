import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SectionTitle, SectionDivider } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionDivider></SectionDivider>
      <br /><br />
      <SectionTitle>Get in Touch</SectionTitle>
      <br/>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="Mobile: 07403787977">07403787977</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:christopher.bellocci@hotmail.com">christopher.bellocci@hotmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Day Rate</LinkTitle>
          <LinkItem>From £350p/d+ negotiable</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Be a rainbow in someone else's cloud 🌈.</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/cbelloxxi">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/cbellocci">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://instagram.com/cbelloxxi">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialIconsContainer>
        </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
