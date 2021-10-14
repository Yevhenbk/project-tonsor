import jwt_decode from "jwt-decode"; //optional

const BASE_URL = "https://3001-purple-clownfish-cv1clch0.ws-eu17.gitpod.io/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//BASE_URL: "https://3001-apricot-pigeon-hctg6qx6.ws-eu18.gitpod.io/api/",
			currentUser: "",
			message: "",
			barbers: [],
			clients: [],
			barber_services: [],
			services: [],
			reviews: [],
			appointments: [],
			islogged: false
		},
		actions: {
			login: data => {
				fetch(BASE_URL + "login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					}
				})
					.then(resp => {
						if (resp.status === 200) {
							console.log(resp);
							return resp.json();
						} else if (resp.status === 401) {
							console.log("Invalid data");
						} else if (resp.status === 400) {
							console.log("Invalid email / password");
						} else throw Error("Something went wrong");
					})
					.then(data => {
						localStorage.setItem("token", data.token);
						setStore({ islogged: true });
						//redirect(); pasar la url de la vista que va a ver el usuario cuando se registra
					})
					.catch(error => {
						console.error("Unknown error", error);
						setStore({ islogged: false });
						//localStorage.removeItem("token");
					});
			},
			setLoggedIn: () => {
				setStore({ islogged: true });
			},
			setLoggedOut: () => {
				setStore({ islogged: false });
			},
			client: data => {
				fetch(BASE_URL + "client", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					},
					body: JSON.stringify(data)
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid info");
						}
						return response.json();
					})
					.then(responseAsJson => {
						localStorage.setItem("token", responseAsJson);
					})
					.catch(error => console.error("Unknown error", error));
			},

			barber: data => {
				console.log(data);
				fetch(BASE_URL + "barber", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					},
					body: JSON.stringify(data)
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid info");
						}
						return response.json();
					})
					.then(responseAsJson => {
						localStorage.setItem("token", responseAsJson);
					})
					.catch(error => console.error("Unknown error", error));
			},

			postBarber: data => {
				console.log(data);
				fetch(BASE_URL + "barber", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					},
					body: JSON.stringify(data)
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid info");
						}
						return response.json();
					})
					.then(responseAsJson => {
						localStorage.setItem("token", responseAsJson);
					})
					.catch(error => console.error("Unknown error", error));
			},

			barber_services: (data, id) => {
				console.log(data);
				fetch(BASE_URL + "barber" + "barber_services", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid service info");
						}
					})
					.then(responseAsJson => {
						localStorage.setItem("token", data.token);
					})
					.catch(error => console.error("There as been an unknown error", error));
			},
			//FER
			getBarbers: () => {
				fetch(BASE_URL + `barber`, {
					method: "GET"
				})
					.then(resp => {
						console.log(resp, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
						if (!resp.ok) {
							throw Error("Somethin is wrong", resp.status);
						}

						return resp.json();
					})

					.then(hello => {
						console.log(hello, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
						setStore({ barbers: hello });
					})
					.catch(error => {
						console.log(error);
					});
			},

			get_barber_services: data => {
				console.log(data);
				fetch(BASE_URL + "barber_services", {
					method: "GET",
					headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" })
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load a service");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ barber_services: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			getReviews: id => {
				fetch(BASE_URL + "barber/" + id + "/review", {
					method: "GET"
				})
					.then(resp => {
						console.log(resp);
						if (!resp.ok) {
							throw Error("Somethin is wrong", resp.status);
						}

						return resp.json();
					})
					.then(resp => {
						setStore({ reviews: resp });
					})
					.catch(error => {
						console.log(error);
					});
			},
			//createReview pasar por parametro text y ratings para crear al jsonfile
			postReview: (data, id) => {
				console.log(data, id);
				//obtenemos el token
				const token = localStorage.getItem("token");
				console.log(`Token: ${token}`);
				//comprobar la existencia del token
				if (!token) {
					console.error("No existe el token, error");
					//debes mostrar algo al usuario
				}
				//check token
				fetch(`${BASE_URL}barber/${id}/review`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors",
						Authorization: `Bearer ${token}`
					},
					body: JSON.stringify(data)
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid info");
						}
						return resp.json();
					})
					.then(responseAsJson => {
						localStorage.setItem("token", responseAsJson);
					})
					.catch(error => console.error("Unknown error", error));
			},

			appointment: data => {
				console.log(data);
				fetch(getStore().BASE_URL.concat("appointment"), {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid service info");
						}
					})
					.then(responseAsJson => {
						setStore({ appointment: responseAsJson });
					})
					.catch(error => console.error("There as been an unknown error", error));
			},

			reserveAppointment: (data, id) => {
				console.log(data);
				fetch(BASE_URL + "client/" + id + "/appointment", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid service info");
						}
					})
					.then(responseAsJson => {
						setStore({ appointment: responseAsJson });
					})
					.catch(error => console.error("There as been an unknown error", error));
			},

			getAppointment: (data, id) => {
				console.log(data);
				fetch(BASE_URL + "barber/" + id + "/appointment", {
					method: "GET",
					headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" })
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load a service");
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ appointment: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
