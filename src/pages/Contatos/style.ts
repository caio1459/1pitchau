import { styled } from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
`;

export const THtr = styled.tr`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 6px;
  text-align: center;
  border: 1px solid #ddd;
`;
export const THTh = styled.th`
  padding: 6px;
  text-align: center;
  border: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 6px;
  text-align: center;
  border: 1px solid #ddd;
`;
export const TBTr = styled.tr`
  padding: 6px;
  text-align: center;
  border: 1px solid #ddd;
`;
export const Button = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--green);
  :hover {
    filter: brightness(1.3);
  }
  margin-top: 10px;
  width: 60%;
`;
