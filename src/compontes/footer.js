import react from 'react';
import '../hoja de estilos/Footer.css';

function Footer(){
    return(
        <footer>
        <div className='formulario'>
            <h2 className='C1'>Envianos un Correo</h2>

            <form action="https://formsubmit.co/lucaslescano.t89@gmail.com" method="post">
                <label className="espacio1" for="nombre">Nombre</label>
                <input className="espacio2" type="text" name="name" />

                <label className="espacio1" for="email">Correo Electronico</label>
                <input className="espacio2" type="email" name="email" />

                <label className="espacio1" for="comments">Comentarios</label>
                <textarea className="espacio2" name="commenss" cols="15" rows="5"/>

                <input className="espacio3" type="submit" value="Enviar"/>
                
            </form>

        </div>
        </footer>

    )

}

export default Footer;