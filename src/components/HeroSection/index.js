import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { FaGithub, FaLinkedin, FaFileAlt, FaChevronDown, FaEnvelope, FaTwitter, FaMedium } from "react-icons/fa";

/* ─── Styled Components ──────────────────────── */

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 140px 24px 100px;
  z-index: 1;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 120px 16px 80px;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StatusLine = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.primary};
  animation: fadeInUp 0.6s ease-out;
`;

const StatusIndicator = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 12px ${({ theme }) => theme.primaryGlow};
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

const Name = styled.h1`
  font-size: clamp(42px, 7vw, 72px);
  font-weight: 800;
  color: ${({ theme }) => theme.white};
  line-height: 1.1;
  letter-spacing: -1px;
  animation: fadeInUp 0.6s ease-out 0.1s both;
`;

const Title = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  animation: fadeInUp 0.6s ease-out 0.2s both;
`;

const TerminalBlock = styled.div`
  background: ${({ theme }) => theme.terminalBg};
  border: 1px solid ${({ theme }) => theme.terminalBorder};
  border-radius: 10px;
  padding: 20px 24px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  max-width: 700px;
  animation: fadeInUp 0.6s ease-out 0.3s both;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.primary}, transparent);
    opacity: 0.5;
  }
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const TerminalDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 0.8;
`;

const TerminalTitle = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.text_tertiary};
  margin-left: 8px;
`;

const TerminalLine = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 4px;
  line-height: 1.8;

  .prompt {
    color: ${({ theme }) => theme.primary};
    opacity: 0.6;
  }

  .command {
    color: ${({ theme }) => theme.terminalText};
  }

  .output {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.8;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: ${({ theme }) => theme.primary};
  margin-left: 4px;
  vertical-align: text-bottom;
  animation: terminalBlink 1s step-end infinite;
`;

const Headline = styled.p`
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  line-height: 1.5;
  max-width: 700px;
  animation: fadeInUp 0.6s ease-out 0.4s both;
`;

const Subheading = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  max-width: 650px;
  animation: fadeInUp 0.6s ease-out 0.5s both;
`;

const CTARow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.6s both;
`;

const PrimaryButton = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.bg};
  background: ${({ theme }) => theme.primary};
  padding: 12px 28px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.primaryGlow};
  }
`;

const SecondaryButton = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.borderLight};
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primaryDim};
  }
`;

const IconLink = styled.a`
  font-size: 20px;
  color: ${({ theme }) => theme.text_tertiary};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primaryDim};
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_tertiary};
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  animation: float 3s ease-in-out infinite;
  cursor: pointer;
`;

/* ─── Typing animation hook ──────────────────── */

const useTypingEffect = (texts, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

/* ─── Component ──────────────────────────────── */

const HeroSection = () => {
  const typedRole = useTypingEffect(Bio.roles, 60, 30, 2500);

  return (
    <HeroContainer id="about">
      <HeroContent>
        <StatusLine>
          <StatusIndicator />
          available for work
        </StatusLine>

        <Name>{Bio.name}</Name>

        <Title>{typedRole}<Cursor /></Title>

        <TerminalBlock>
          <TerminalHeader>
            <TerminalDot color="#ff5f56" />
            <TerminalDot color="#ffbd2e" />
            <TerminalDot color="#27c93f" />
            <TerminalTitle>abhay@systems ~ </TerminalTitle>
          </TerminalHeader>
          <TerminalLine>
            <span className="prompt">$</span>{" "}
            <span className="command">cat profile.yml</span>
          </TerminalLine>
          <TerminalLine>
            <span className="output">role: {Bio.title}</span>
          </TerminalLine>
          <TerminalLine>
            <span className="output">focus: distributed systems, cloud infra, ML deployment</span>
          </TerminalLine>
          <TerminalLine>
            <span className="output">status: building at scale</span>
          </TerminalLine>
        </TerminalBlock>

        <Headline>{Bio.headline}</Headline>
        <Subheading>{Bio.subheading}</Subheading>

        <CTARow>
          <PrimaryButton href="#projects">
            View Projects
          </PrimaryButton>
          <SecondaryButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
            <FaFileAlt /> Resume
          </SecondaryButton>
          <IconLink href={Bio.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <IconLink href={Bio.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </IconLink>
          <IconLink href={`mailto:${Bio.email}`}>
            <FaEnvelope />
          </IconLink>
          <IconLink href={Bio.medium} target="_blank" rel="noopener noreferrer">
            <FaMedium />
          </IconLink>
        </CTARow>
      </HeroContent>

      <ScrollIndicator onClick={() => document.getElementById("summary")?.scrollIntoView({ behavior: "smooth" })}>
        scroll
        <FaChevronDown />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
