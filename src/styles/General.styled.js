import styled from "styled-components";

export const container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.text};
  font-size: 3rem;
  font-family: 'Pacifico', cursive;
  background-color: transparent; 
`
export const Subtitle = styled.h1`
  color: ${(props) => props.theme.color.text};
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  background-color: transparent; 
  padding: 10px;
`
