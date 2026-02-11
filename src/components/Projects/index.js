import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import { FaGithub } from "react-icons/fa";

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
  margin-bottom: 16px;
  line-height: 1.2;
`;

const Subtext = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 48px;
  max-width: 600px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.borderLight};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CategoryBadge = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primaryDim};
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CardLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const CardLink = styled.a`
  font-size: 16px;
  color: ${({ theme }) => theme.text_tertiary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`;

const ProjectSubtitle = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.text_tertiary};
  margin-top: -8px;
`;

const ProjectDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
`;

const Highlights = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Highlight = styled.li`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  padding-left: 18px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-size: 12px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const Tag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: ${({ theme }) => theme.text_tertiary};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 4px 10px;
  border-radius: 4px;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Content>
        <Label>{"// projects"}</Label>
        <Heading>Systems I've Built</Heading>
        <Subtext>
          Production systems designed for scale, reliability, and performance.
        </Subtext>

        <Grid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <CardTop>
                <CategoryBadge>{project.category.replace("-", " ")}</CategoryBadge>
                <CardLinks>
                  {project.github && (
                    <CardLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </CardLink>
                  )}
                </CardLinks>
              </CardTop>

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              <ProjectDesc>{project.description}</ProjectDesc>

              <Highlights>
                {project.highlights.map((h, i) => (
                  <Highlight key={i}>{h}</Highlight>
                ))}
              </Highlights>

              <Tags>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
            </ProjectCard>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Projects;