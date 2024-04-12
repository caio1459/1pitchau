import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  margin: auto;
  border: 1px solid black;
  padding: 1rem;
  color: #dcdcdc;
`;

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #2980b9;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  input,
  select,
  textarea {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: black;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export const Alert = styled.p`
  color: red;
  font-weight: 500;
`;
