import react from 'react';
import '../hoja de estilos/header.css';

function Header(){
    return(
        <div className='logo'>
            <img 
             className='img1'
             src={require('../imagenes/loggo.gif')}
             alt="Logo de la empresa"
             />
             <h1 className='titulo'>Servicio Tecnico Mobil</h1>
        </div>
    )
}

export default Header;