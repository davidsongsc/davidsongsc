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
    },{
        title: '📱 Gestor Comanda Restaurante',
        description: 'Desenvolvimento de projeto react para gestão de mesas e comandas. Este projeto permite gerir pequenos estabelecimentos comerciais.',
        image: 'https://raw.githubusercontent.com/davidsongsc/GestorComanda/main/md/img/gerenciador1.png',
        githubLink: 'https://github.com/davidsongsc/GestorComanda',
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
