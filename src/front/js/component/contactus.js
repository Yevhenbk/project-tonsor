import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/priv.scss";

const Contactus = () => {
	const form = useRef();
	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm("gmailMessage", "template_nu8otys", form.current, "user_H2D4RsVeVDfcFZIjoeSYV").then(
			result => {
				alert("Enviado con exito :)");
				console.log(result.text);
			},
			error => {
				alert("Error");
				console.log(error.text);
			}
		);
	};

	return (
		<div>
			<div className="div-master">
				<div className="div-child">
					<h1 className="prv-font-tit">Contáctanos</h1>
					<p className="prv-font-txt">
						Si tienes cualquier duda, sugerencia o reclamacíon; no dudes en ponerte en contacto con nuestro
						soporte de Atención al Cliente. Estaremos encantados de ayudarte.
					</p>
					<form ref={form} onSubmit={sendEmail}>
						<div className="row pt-5 mx-auto">
							<div className="col-lg-8 col-sm-12 form-group mx-auto">
								<label className="prv-font-txt">Nombre</label>
								<input
									type="text"
									autoFocus
									className="form-control"
									required
									placeholder="Nombre"
									name="name"
								/>
							</div>
							<div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
								<label className="prv-font-txt">Email</label>
								<input
									type="email"
									className="form-control"
									required
									placeholder="Tu email"
									name="email"
								/>
							</div>

							<div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
								<label className="prv-font-txt">Mensaje</label>
								<textarea
									className="form-control"
									id=""
									cols="30"
									rows="8"
									required
									placeholder="Tu mensaje"
									name="message"
								/>
							</div>
							<div className="col-lg-8 col-sm-12 pt-3 mx-auto btn-mail-contact-us-container ">
								<input type="submit" className="btn-mail-contact-us" value="Enviar a email" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Contactus;
