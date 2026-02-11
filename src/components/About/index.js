import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";

const SummaryContainer = styled.section`
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const SummaryContent = styled.div`
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
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  max-width: 750px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 2px;
  background: ${({ theme }) => theme.primary};
  margin-top: 32px;
  opacity: 0.5;
`;

const Summary = () => {
  return (
    <SummaryContainer id="summary">
      <SummaryContent>
        <Label>{"// about"}</Label>
        <Text>{Bio.description}</Text>
        <Divider />
      </SummaryContent>
    </SummaryContainer>
  );
};

export default Summary;