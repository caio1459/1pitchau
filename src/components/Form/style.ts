import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  margin: auto;
  border: 1px solid black;
  padding: 1rem;
  color: #dcdcdc;

  h1 {
    text-align: center;
    font-size: 2rem;
    color: #2980b9;
  }

  div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 8px;
      color: black
    }

    input,
    select,
    textarea {
      padding: 8px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 10px;
      background-color: #3498db;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }
  }
`;
