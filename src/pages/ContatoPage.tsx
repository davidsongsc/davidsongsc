import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function ContatoPage() {
    return (
        <Container>
            <h1>Entre em Contato</h1>
            <p>Estou sempre aberto para novas oportunidades e colaborações. Fique à vontade para entrar em contato comigo.</p>
            <Link className="libutton" to="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=davidsongsc" target='_blank'>Siga-me no LinkedIn</Link>


            <div className="mb-4">
                <h2>Informações de Contato</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:davidsongsc@gmail.com">
                            davidsongsc@gmail.com
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} /> Telefone: <a href="tel:+5521983108439">
                            (21) 98310-8439
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLink} /> LinkedIn:{' '}
                        <a href="https://www.linkedin.com/in/davidsongsc" target="_blank" rel="noopener noreferrer">
                            Perfil no LinkedIn
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCodeBranch} /> GitHub:{' '}
                        <a href="https://github.com/davidsongsc" target="_blank" rel="noopener noreferrer">
                            Perfil no GitHub
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Formulário de Contato</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="nome" name="nome" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mensagem" className="form-label">Mensagem</label>
                        <textarea className="form-control" id="mensagem" name="mensagem" rows={4} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                </form>
            </div>
        </Container>
    );
}

export default ContatoPage;
