import React from "react";
import '../assets/css/cabecalho.css';
import logo from '../assets/img/logo-nt.png'
import icon from '../assets/img/heitor.png'


function Cabecalho() {
    return (
        <header className="cabecalho">
            <nav className="nav_menu">
                <div className="nav_menu_img">
                    <img src={logo} alt="" />
                </div>

                <form action="#" method="GET">
                    <input type="text" name="search" placeholder="Buscar..." />
                    <i className="fas fa-search" aria-hidden="true"></i>
                </form>
                <div className="nav_menu_items">
                    <ul>
                        <li><a>Interesses</a></li>
                        <li><a>Compras</a></li>
                        <li><a>Sobre</a></li>
                    </ul>
                </div>
                <div className="nav_menu_img">
                    <img src={icon} alt="" />
                </div>
                <div className="nav_menu_botao">
                    <i className="fas fa-bars"></i>
                </div>

            </nav>
        </header>
    )
}
export default Cabecalho; 