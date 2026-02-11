import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.section`
  padding: 100px 24px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 1100px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillGroup = styled.div`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderLight};
    transform: translateY(-2px);
  }
`;

const GroupTitle = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  letter-spacing: 1px;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

const SkillIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: grayscale(30%);
  transition: filter 0.2s ease;

  ${SkillItem}:hover & {
    filter: grayscale(0%);
  }
`;

const SkillName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  transition: color 0.2s ease;

  ${SkillItem}:hover & {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Content>
        <Label>{"// tech stack"}</Label>
        <Heading>Tools & Technologies</Heading>

        <Grid>
          {skills.map((group, idx) => (
            <SkillGroup key={idx}>
              <GroupTitle>{group.title}</GroupTitle>
              <SkillList>
                {group.skills.map((skill, i) => (
                  <SkillItem key={i}>
                    <SkillIcon
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillGroup>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Skills;