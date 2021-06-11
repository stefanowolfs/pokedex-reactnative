import React from 'react';

import { Container, TitleText, DescriptionText } from './styles';

type InfoCardProps = {
  title: string;
  description: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <DescriptionText>{description}</DescriptionText>
    </Container>
  );
};

export default InfoCard;
