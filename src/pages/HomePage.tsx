import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (
    <Container>
      <h1>Desenvolvedor Front-End</h1>
      <p>
        Desenvolvedor front-end especializado em acessibilidade e
        design responsivo, com experiência na criação de uma aplicação
        web personalizada para otimizar a operação de um restaurante.
        Minha contribuição resultou em melhorias significativas na gestão
        de comandas, pedidos e controle de caixa. Utilizei tecnologias
        avançadas, como React, Python e SQLite, para garantir um
        desempenho excepcional. O projeto integra de forma fluida várias
        interfaces essenciais, incluindo uma plataforma de compra,
        gerenciamento de comandas e uma interface de cozinha.
      </p>
      <Button variant="primary" href="#sobre-mim">
        Saiba mais
      </Button>
    </Container>
  );
}

export default HomePage;
