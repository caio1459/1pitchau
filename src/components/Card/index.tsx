import React from "react";
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./style";
import { useNavigate } from "react-router-dom";

interface ICardProps {
  id: string
  nome: string;
  preco: string;
  preco_promo: string;
  imagemp: string;
}

export const Card: React.FC<ICardProps> = ({ id, imagemp, preco, preco_promo, nome }) => {
  const navigate = useNavigate()
  return (
    <CardBody>
      <img src={imagemp} alt="Imagem Ilustrativa" />
      <Title>{nome}</Title>
      <TitlePreco>{preco}</TitlePreco>
      <TextPromo>{preco_promo}</TextPromo>
      <Button onClick={() => navigate(`/detalhes/${id}`)}>
        <TextButton>Detalhes</TextButton>
      </Button>
    </CardBody>
  );
};
