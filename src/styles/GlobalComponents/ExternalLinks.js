import React from 'react';
import styled from 'styled-components';

const ExternalLink = styled.a`
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  color: #fff;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #bce4e6;
  }
`;

const ExternalLinks = ({ href, alt, children }) => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(href, '_blank');
  };

  return (
    <ExternalLink href={href} alt={alt} onClick={handleLinkClick}>
      {children}
    </ExternalLink>
  );
};

export default ExternalLinks;
