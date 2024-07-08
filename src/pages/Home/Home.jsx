import React from "react";
import { Container, Title, Subtitle } from "../../styles.General.styled";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom'; 


const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Header />
        <Title>TicTacToe</Title>
        <Subtitle>Play with your friends, higher score wins</Subtitle>
        <Button onclick={() => navigate("/game-on")}>Play Now</Button>
      </Container>
    </div>
  );
};

export default Home;
