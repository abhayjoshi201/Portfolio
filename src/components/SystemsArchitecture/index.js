import React from "react";
import styled from "styled-components";
import { systemsArchitecture } from "../../data/constants";

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

const Pipeline = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0;
  overflow-x: auto;
  padding: 20px 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PipelineNode = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Node = styled.div`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 10px;
  padding: 20px 24px;
  min-width: 130px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 20px ${({ theme }) => theme.primaryGlow};
    transform: translateY(-2px);
  }
`;

const NodeLabel = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  margin-bottom: 6px;
`;

const NodeSub = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.text_tertiary};
  line-height: 1.4;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  opacity: 0.5;
  flex-shrink: 0;

  @media (max-width: 900px) {
    transform: rotate(90deg);
    padding: 8px 0;
  }
`;

const SystemsArchitecture = () => {
  return (
    <Container id="architecture">
      <Content>
        <Label>{"// architecture"}</Label>
        <Heading>Systems I Operate</Heading>
        <Subtext>
          End-to-end production infrastructure from client to inference.
        </Subtext>

        <Pipeline>
          {systemsArchitecture.map((node, idx) => (
            <PipelineNode key={idx}>
              <Node>
                <NodeLabel>{node.label}</NodeLabel>
                <NodeSub>{node.sub}</NodeSub>
              </Node>
              {idx < systemsArchitecture.length - 1 && <Arrow>→</Arrow>}
            </PipelineNode>
          ))}
        </Pipeline>
      </Content>
    </Container>
  );
};

export default SystemsArchitecture;
