import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import { FaGraduationCap } from "react-icons/fa";

const Container = styled.section`
  padding: 80px 24px;
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
  margin-bottom: 40px;
  line-height: 1.2;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 32px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderLight};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const IconContainer = styled.div`
  min-width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDim};
  border-radius: 12px;
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const School = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`;

const Degree = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 4px;
`;

const MetaItem = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.text_tertiary};
  background: rgba(255, 255, 255, 0.04);
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Education = () => {
  return (
    <Container id="education">
      <Content>
        <Label>{"// education"}</Label>
        <Heading>Education</Heading>

        {education.map((edu, idx) => (
          <Card key={idx}>
            <IconContainer>
              <FaGraduationCap />
            </IconContainer>
            <Details>
              <School>{edu.school}</School>
              <Degree>{edu.degree}</Degree>
              <Meta>
                <MetaItem>{edu.date}</MetaItem>
                <MetaItem>{edu.grade}</MetaItem>
              </Meta>
            </Details>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default Education;