import React from "react";
import "../../styles/priv.scss";
import barber_1 from "../../img/pexels-cottonbro-3998422.jpg";

const Aboutus = () => {
	return (
		<div className="div-master">
			<div className="div-child">
				<h1 className="prv-font-tit">¿Quíenes Somos?</h1>
				<br />
				<h2 className="prv-font-tit">LLegamos para ayudarte</h2>
				<p className="prv-font-txt">
					TONSOR Barber Point inicia su camino para que tú no tengas ni que despeinarte, ya que nuestros
					tonsores van a dónde tu te encuentres para darte el mejor servicio.
				</p>
				<h2 className="prv-font-tit">¿Por qué iniciamos el proyecto?</h2>
				<p className="prv-font-txt">
					Empezamos esta aventura para llegar a todo el mundo, pero centrandonos en el cuidado de los hombres,
					en especial a aquellos que por tiempo o ubicación no pueden acceder a cita de peluquería. Incluso
					ofrecemos más servicios para complementar sus necesidadaes.
				</p>
				<h2 className="prv-font-tit">Nuestros Tonsores</h2>
				<p className="prv-font-txt">
					A parte de ofrecer servicios s nuestros futuros clientes, damos la oportunidad a los peluqueros
					profesiones para que puedan conectarse a una red más amplia y llegar de otra manera a nuevos
					clientes.
					{""}
					<img className="img-aboutus" src={barber_1} />
				</p>
				<h2 className="prv-font-tit">Localización</h2>
				<p className="prv-font-txt">
					Tanto nuestros Clientes como nuestros Tonsores podrán acceder a la ubicación de la aplicación para
					así tener mayor rapidez tanto a la hora de elegir a tu Tonsor más cecano, como ver donde se
					encuentra tu Cliente a la hora de ir al servicio solicitado.{" "}
				</p>
				<h2 className="prv-font-tit">Contacto</h2>
				<p className="prv-font-txt">
					Dejamos a disposición de todos nuestros usuarios las siguientes formas de contacto para resolver
					cualquiera de vuestras dudas:
					<ul>
						<li>Email: tonsor.app@gmail.com</li>
						<li>Dirección: Calle Falsa 123 28029, Madrid</li>
						<li>Teléfono de contacto: 654321789</li>
					</ul>
				</p>
				<h2 className="prv-font-tit">Seguimos trabajando para tí</h2>
				<p className="prv-font-txt">
					Día a día seguiremos trabajando para dar la mejor expereiencia para todos nuestros usuarios, así
					como resolver dudas y problemas. Seguiremos mejorando la aplicación para que TONSOR Barber Point sea
					tu sitio de referencia, y darte el mejor trato posible.{" "}
				</p>
			</div>
		</div>
	);
};

export default Aboutus;
