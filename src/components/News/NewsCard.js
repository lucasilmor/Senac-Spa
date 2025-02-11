import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  width: 20%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin: 0 0 10px;
`;

const Content = styled.p`
  margin: 0;
`;

const NewsCard = ({ title, content }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Card>
  );
};

export default NewsCard;