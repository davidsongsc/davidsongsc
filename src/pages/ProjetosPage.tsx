import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjetosPage() {
  const projects = [
    {
      title: '📱 Cardapio Digital Restaurante',
      description: 'Desenvolvimento de projeto react para site de restaurante. Este projeto permite gerir pequenos estabelecimentos comerciais.',
      image: 'https://raw.githubusercontent.com/davidsongsc/webcomercial/main/md/01.png',
      githubLink: 'https://github.com/davidsongsc/webcomercial',
    }, {
      title: '📱 Gestor Comanda Restaurante',
      description: 'Desenvolvimento de projeto react para gestão de mesas e comandas. Este projeto permite gerir pequenos estabelecimentos comerciais.',
      image: 'https://raw.githubusercontent.com/davidsongsc/GestorComanda/main/md/img/gerenciador1.png',
      githubLink: 'https://github.com/davidsongsc/GestorComanda',
    },
    {
      title: '📱 Funcionario do Mes',
      description: 'É com grande satisfação que compartilho o projeto "Funcionário do Mês", no qual dediquei meu trabalho e habilidades. Este projeto destaca minha experiência em desenvolvimento, gestão de equipes e promoção de cultura corporativa positiva. Confira os detalhes aqui: [Link para o Projeto](https://lnkd.in/dZTfc2c2). Estou entusiasmado para discutir como essa experiência pode agregar valor à sua equipe. #DesenvolvimentoDeProjetos #CulturaCorporativa #Recrutamento #TechTalent',
      image: 'https://media.licdn.com/dms/image/D4D2DAQHDwwMh1hfVXg/profile-treasury-image-shrink_1920_1920/0/1702994555963?e=1703602800&v=beta&t=r24_XIcQpiyGIPXFx5oS3HavsDatCJTORdqqltJH4UM',
      githubLink: 'https://github.com/davidsongsc/torneio-votos',
    },
    {
      title: '📱 Barbearia',
      description: 'Template Barbearia',
      image: '',
      githubLink: 'https://github.com/davidsongsc/barbearia-zarzar',
    },
    // ...
  ];

  return (
    <Container>
      <h1>Meus Projetos</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Ver Projeto no GitHub
                  <FontAwesomeIcon icon={faGithub} className="ml-2" />
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProjetosPage;
