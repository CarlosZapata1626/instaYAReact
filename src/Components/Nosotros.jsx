
const Nosotros = ()=>{
    return(
        <div>
        <section id="about" className="about pt-40">
            <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                    <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                        <img src={'/images/about.jpg'}  alt=""/>
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                    </div>
                    <div className="col-lg-6 content order-last  order-lg-first">
                        <h3>Nosotros</h3>
                        <p>
                         Somos instaYa, una compañía que trabaja para enviar y recibir tus documentos, paquetes y mercancías con los mejores tiempos de entrega del mercado.
                        Sincronizamos nuestra operación con la velocidad del mundo de los negocios. Con nuestro portafolio, tienes la solución precisa a tus necesidades. Contamos con la flota aérea más grande del país, el mayor número de rutas operadas en más de 1200 destinos, y una ágil flota de motos y camiones que llegan a más de 600 destinos en toda Colombia. En otras palabras, envíos en tiempo récord.
                        Acercamos a los colombianos con nuestros más de 180 puntos de venta a nivel nacional los cuales se encuentran ubicados estratégicamente.
                        </p>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100">
                            <i className="bi bi-diagram-3"></i>
                            <div>
                                <h5>Puntos de despacho</h5>
                                <p>Contamos con una gran varieda de sedes a nivel nacional lo que facilita el almacenamiento y rapido envio de sus paquetes</p>
                            </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-fullscreen-exit"></i>
                                <div>
                                    <h5>Almacenamiento</h5>
                                    <p>Garantizamos la integridad fisica de tu paquete</p>
                                </div>
                            </li>
                            <li data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-broadcast"></i>
                                <div>
                                    <h5>Rastreo de envios</h5>
                                    <p>Contamos con la mejor tecnologia de rastreo satelital, lo que facilita la visualizacion y estado del paquete</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
        </div>
        
        );
}
export default Nosotros;