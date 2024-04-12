import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 20px;
`;

export const SectionImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

export const Image = styled.img`
  width: 80%;
  height: 100%;
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const P = styled.p`
  margin: 10px 0;
`;
