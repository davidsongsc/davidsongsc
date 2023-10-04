import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUserCircle, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importe os ícones
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

interface ProfileCardProps {
    name: string;
    profession: string;
    description: string;
    imageUrl: string;
    imgPerfil: string;
    githubUrl: string;
    linkedinUrl: string;
}

const Perfil: React.FC<ProfileCardProps> = ({
    name,
    profession,
    description,
    imageUrl,
    imgPerfil,
    githubUrl,
    linkedinUrl,
}) => {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl || 'default-image-url.jpg'} alt="Perfil" />
            <div className="perfil">
                <Card.Body>
                    <div className="text-center">
                        {imgPerfil !== '' ?
                            <img className='perfilImg' src={imgPerfil} alt="Davidson George" /> : <FaUserCircle size={100} />}
                    </div>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{profession}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    {/* Links para o GitHub e o LinkedIn com ícones */}
                    <div className="text-center">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={64} color='black' />
                        </a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={64} color='black' />
                        </a>
                    </div>
                    <Link to="/projetos">
                        <div className="text-center">
                            <Button variant="primary">
                                Saiba mais
                            </Button>
                        </div>
                    </Link>
                </Card.Body>
            </div>
        </Card>
    );
};

export default Perfil;
