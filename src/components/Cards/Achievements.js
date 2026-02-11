import React from "react";
import styled from "styled-components";
import { achievements } from "../../data/constants";

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

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Badge = styled.div`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.borderLight};
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

    &::after {
      opacity: 1;
    }
  }
`;

const IconCircle = styled.div`
  font-size: 28px;
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const BadgeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BadgeTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`;

const BadgeDetail = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: ${({ theme }) => theme.text_tertiary};
  line-height: 1.5;
`;

const Achievements = () => {
  return (
    <Container id="achievements">
      <Content>
        <Label>{"// achievements"}</Label>
        <Heading>Recognition</Heading>

        <Grid>
          {achievements.map((item, idx) => (
            <Badge key={idx}>
              <IconCircle>{item.icon}</IconCircle>
              <BadgeContent>
                <BadgeTitle>{item.title}</BadgeTitle>
                <BadgeDetail>{item.detail}</BadgeDetail>
              </BadgeContent>
            </Badge>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Achievements;
