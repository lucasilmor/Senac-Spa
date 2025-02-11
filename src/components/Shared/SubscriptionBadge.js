import React from "react";
import styled from "styled-components";

const Badge = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  font-weight: bold;
  margin-top: 10px;
  width:20%;
  color: white;
  background-color: ${(props) => (props.isPremium ? "gold" : "red")};
`;

const SubscriptionBadge = ({ isPremium }) => {
  return <Badge isPremium={isPremium}>{isPremium ? "Premium" : "Free"}</Badge>;
};

export default SubscriptionBadge;