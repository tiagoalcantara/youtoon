import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/images/logo.png';
import IconLinkedin from '../../assets/images/linkedin.svg';
import IconTwitter from '../../assets/images/twitter.svg';
import IconGithub from '../../assets/images/github.svg';

function Footer() {
  return (
    <FooterBase>
        <img style={{width: "auto", height: "50px"}} src={Logo} alt="Logo YouToon" />
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>

      <p>
        Tiago Alcantara
      </p>


      <p style={{ display: "flex", justifyContent: "center"}}>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tiago-ferreira-de-alcantara-campos-3126a6144/"><img alt="Linkedin" style={{width: "32px", margin: "4px"}} src={IconLinkedin} /></a>
        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/umtiagoporai"><img alt="Twitter" style={{width: "32px", margin: "4px"}} src={IconTwitter} /></a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/tiagoalcantara"><img alt="Github" style={{width: "32px", margin: "4px"}} src={IconGithub} /></a>
      </p>

      <p style={{fontSize: '.6em'}}>
        
        Ícones feitos por <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> e <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> em <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
