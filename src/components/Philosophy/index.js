import React from "react";
import styled from "styled-components";
import { philosophy } from "../../data/constants";

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

const PrincipleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Principle = styled.div`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 10px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderLight};
    transform: translateX(4px);
  }
`;

const PrincipleIcon = styled.span`
  font-size: 24px;
  min-width: 36px;
  text-align: center;
`;

const PrincipleText = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Philosophy = () => {
  return (
    <Container id="philosophy">
      <Content>
        <Label>{"// philosophy"}</Label>
        <Heading>Production Philosophy</Heading>

        <PrincipleGrid>
          {philosophy.map((item, idx) => (
            <Principle key={idx}>
              <PrincipleIcon>{item.icon}</PrincipleIcon>
              <PrincipleText>{item.principle}</PrincipleText>
            </Principle>
          ))}
        </PrincipleGrid>
      </Content>
    </Container>
  );
};

export default Philosophy;
