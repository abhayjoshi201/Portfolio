import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 48px 24px;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Logo = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const Copyright = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_tertiary};
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SocialLink = styled.a`
  font-size: 20px;
  color: ${({ theme }) => theme.text_tertiary};
  transition: all 0.2s ease;
  padding: 8px;
  border-radius: 6px;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primaryDim};
  }
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.text_tertiary};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.primaryGlow};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Left>
          <Logo>{"{AJ}"}</Logo>
          <Copyright>© {new Date().getFullYear()} Abhay Joshi. All systems operational.</Copyright>
        </Left>

        <StatusBadge>systems online</StatusBadge>

        <SocialLinks>
          <SocialLink href={Bio.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;