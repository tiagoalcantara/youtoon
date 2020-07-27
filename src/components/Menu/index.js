import React from 'react';
import Logo from '../../assets/images/logo.png';
import Button from '../Button';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Youtoon Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/"> 
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;