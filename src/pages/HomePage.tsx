import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Perfil from './Perfil';

function HomePage() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Perfil
            name="Seu Nome"
            profession="Desenvolvedor Front-end"
            description="Desenvolvedor front-end especializado em acessibilidade e
            design responsivo, com experiência na criação de uma aplicação
            web personalizada para otimizar a operação de um restaurante.
            Minha contribuição resultou em melhorias significativas na gestão
            de comandas, pedidos e controle de caixa. Utilizei tecnologias
            avançadas, como React, Python e SQLite, para garantir um
            desempenho excepcional. O projeto integra de forma fluida várias
            interfaces essenciais, incluindo uma plataforma de compra,
            gerenciamento de comandas e uma interface de cozinha."
            imageUrl="https://dagesico.pythonanywhere.com/static/img/barner.jpg"
            imgPerfil="https://avatars.githubusercontent.com/u/53156529?s=400&u=eaab13b51dd43f2ca6f9db7d17562b781b132e06&v=4"
            githubUrl="https://github.com/davidsongsc"
            linkedinUrl="https://www.linkedin.com/in/davidsongsc/" />


        </Col>
      </Row>


    </Container>
  );
}

export default HomePage;
