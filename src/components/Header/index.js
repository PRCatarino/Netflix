import React from 'react'
import './Header.css';


export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="/imgs/logoNetflix.png" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img className="logoUsuario" src="/imgs/logoUsuario.jpeg" alt="Usúario">

                    </img>

                </a>
            </div>
        </header>

    );
}