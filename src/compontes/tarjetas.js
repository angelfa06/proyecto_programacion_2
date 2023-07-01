import react from 'react';
import '../hoja de estilos/tarjetas.css';

function Tarjetas(){
    return(
      <div className='tarjetas'>
        <div className='tarj'>
          <article>
            <img src={require('../imagenes/celular1.png')}
             alt="serv01"
             />
            <img src={require('../imagenes/celular2.png')}
             alt="serv01.1"
             />
          </article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos blanditiis aperiam molestiae omnis
          nobis doloribus eligendi, provident vero mollitia tempore.
          <button id="ingresaar"> ingresar </button>

        </div>
        <div className='tarj'>
          <article>
            <img src={require('../imagenes/celular1.png')}
             alt="serv01"
             />
            <img src={require('../imagenes/celular2.png')}
             alt="serv01.1"
             />
          </article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos blanditiis aperiam molestiae omnis
          nobis doloribus eligendi, provident vero mollitia tempore.
          <button id="ingresaar"> ingresar </button>

        </div>
        <div className='tarj'>
          <article>
            <img src={require('../imagenes/celular1.png')}
             alt="serv01"
             />
            <img src={require('../imagenes/celular2.png')}
             alt="serv01.1"
             />
          </article>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos blanditiis aperiam molestiae omnis
          nobis doloribus eligendi, provident vero mollitia tempore.
          <button id="ingresaar"> ingresar </button>

        </div>

      </div>
    )
}

export default Tarjetas;