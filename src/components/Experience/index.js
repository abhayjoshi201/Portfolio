import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";

const Container = styled.section`
  padding: 100px 24px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Label = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  margin-bottom: 48px;
  line-height: 1.2;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.primary} 0%,
      ${({ theme }) => theme.primaryDim} 100%
    );
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -38px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 12px ${({ theme }) => theme.primaryGlow};
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 28px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primaryGlow};
    box-shadow: 0 0 30px rgba(0, 229, 160, 0.05);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

const Role = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`;

const DateBadge = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primaryDim};
  padding: 4px 12px;
  border-radius: 4px;
  white-space: nowrap;
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 4px;
`;

const Location = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.text_tertiary};
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  margin-bottom: 16px;
`;

const Points = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Point = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  padding-left: 20px;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.text_tertiary};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 4px 10px;
  border-radius: 4px;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Content>
        <Label>{"// experience"}</Label>
        <Heading>Where I've Shipped</Heading>

        <Timeline>
          {experiences.map((exp) => (
            <TimelineItem key={exp.id}>
              <Card>
                <CardHeader>
                  <Role>{exp.role}</Role>
                  <DateBadge>{exp.date}</DateBadge>
                </CardHeader>
                <Company>{exp.company}</Company>
                <Location>{exp.location}</Location>
                <Description>{exp.desc}</Description>
                <Points>
                  {exp.points.map((point, i) => (
                    <Point key={i}>{point}</Point>
                  ))}
                </Points>
                <Skills>
                  {exp.skills.map((skill, i) => (
                    <SkillTag key={i}>{skill}</SkillTag>
                  ))}
                </Skills>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </Container>
  );
};

export default Experience;