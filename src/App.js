import React, { useState } from "react";
import SubscriptionBadge from "./components/Shared/SubscriptionBadge";
import NewsCard from "./components/News/NewsCard";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #0056b3;
  }
`;

const newsData = [
  { id: 1,
    title: "Trump assina decreto que impõe tarifas de 25% para importações de aço e alumínio",
    content: "Presidente dos Estados Unidos anunciou a medida no último domingo, em entrevista a jornalistas. Taxar produtos importados é uma das principais promessas de campanha de Trump." },
  
    { id: 2,
     title: "TCU diz ainda n",
      content: "Cfasfsafsafasffsafsaf" },
  
      { id: 3,
     title: "Notícia 3",
      content: "Cfffffffffasfafasfasfas3" },
  
      { id: 4,
     title: "Notícia 4",
      content: "sdfdsfdsfsdfsdfds" },
  
      { id: 5,
     title: "Notícia 5",
      content: "sdfdsfsdfdsfsdfsdfdsfsdfds" }
];

const App = () => {
  const [isPremium, setIsPremium] = useState(false);

  const toggleSubscription = () => {
    setIsPremium((prev) => !prev);
  };

  return (
    <Container>
      <h1>Blog de Notícias</h1>
      <Button onClick={toggleSubscription}>
        Alternar para {isPremium ? "Free" : "Premium"}
      </Button>
      <SubscriptionBadge isPremium={isPremium} />
      <div>
        {newsData.slice(0, isPremium ? 5 : 3).map((news) => (
          <NewsCard key={news.id} title={news.title} content={news.content} />
        ))}
      </div>
    </Container>
  );
};

export default App;