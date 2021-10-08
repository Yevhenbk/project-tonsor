import React, { useRef } from "react";
import emailjs from "emailjs-com";

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
			<div className="container">
				<h2>Contáctanos</h2>
				<form ref={form} onSubmit={sendEmail}>
					<div className="row pt-5 mx-auto">
						<div className="col-lg-8 col-sm-12 form-group mx-auto">
							<label>Nombre</label>
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
							<label>Email</label>
							<input type="email" className="form-control" required placeholder="Su email" name="email" />
						</div>

						<div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
							<label>Mensaje</label>
							<textarea
								className="form-control"
								id=""
								cols="30"
								rows="8"
								required
								placeholder="Su mensaje"
								name="message"
							/>
						</div>
						<div className="col-lg-8 col-sm-12 pt-3 mx-auto">
							<input type="submit" className="btn" value="Enviar a email" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Contactus;
