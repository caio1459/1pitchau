import styled from "styled-components";

export const CardBody = styled.div`
  max-width: 20rem;
  margin: 18px;
  border: solid 1px;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.h3`
  font-size: 1.2rem;
`;
export const TitlePreco = styled.p`
  text-decoration: line-through;
`;
export const TextPromo = styled.strong`
  color: var(--red);
`;
export const Button = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--red);
  :hover {
    filter: brightness(1.3);
  }
  margin-top: 10px;
`;

export const TextButton = styled.h3`
  color: var(--white);
  font-size: 1.2rem;
`;
