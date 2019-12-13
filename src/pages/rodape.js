import React from "react";
import '../assets/css/rodape.css';
import faceIcon from '../assets/img/facebook-icon.png';

 function Rodape(){
    return(
        <footer className="rodape">
        <div className="rodape_structure">
            <div className="rodape_structure_img">
                <img src={faceIcon}/>
            </div>
            <nav className="rodape_structure_nav">
                <ul>
                    <li><a href="#">Interesses</a></li>
                    <li><a href="#">Compras</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
            <div className="rodape_structure_icons">
                <img src={faceIcon} alt="Link Facebook"/>
                <img src={faceIcon} alt="Link Linkedin"/>
                <img src={faceIcon} alt="Link Google"/>
            </div>
        </div>
        <nav className="rodape_structure_nav_mobile">
            <ul>
                <li><a href="#">Interesses</a></li>
                <li><a href="#">Compras</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>
        </nav>
        <div className="rodape_structure_icons_mobile">
            <img src={faceIcon} alt="Link Facebook"/>
            <img src={faceIcon} alt="Link Linkedin"/>
            <img src={faceIcon} alt="Link Google"/>
        </div>
    </footer>
    )
}
export default Rodape; 