import react from 'react';
import '../hoja de estilos/navegadro.css';

function Navegador(){
    return(
        <div className='nav'>
         <nav>
           <ul class="menu">
             <li><a href="#">INICIO</a></li>
             <li><a href="#">ACERCA</a></li>
             <li><a href="tarjetas">SERVICIOS</a></li>
             <li class="redes1"><a href="#">REDES SOCIALES</a></li>
            </ul>
         </nav>
        </div>
    )
}

export default Navegador;