import jwt_decode from "jwt-decode"; //optional

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			BASE_URL: "https://3001-tan-whippet-6e28u63a.ws-eu16.gitpod.io/api/",
			currentUser: "",
			message: ""
		},
		actions: {
			login: data => {
				fetch(getStore().BASE_URL.concat("login"), {
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
						//redirect(); pasar la url de la vista que va a ver el usuario cuando se registra
					})
					.catch(error => {
						console.error("Unknown error", error);
						//localStorage.removeItem("token");
					});
			},

			client: data => {
				fetch(getStore().BASE_URL.concat("client"), {
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
				fetch(getStore().BASE_URL.concat("barber"), {
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

			barber_services: data => {
				console.log("qqqqqqqqqqqqqqqq");
				fetch(getStore().BASE_URL.concat("barber_services"), {
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
			}
		}
	};
};

export default getState;
