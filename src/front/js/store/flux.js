import jwt_decode from "jwt-decode"; //optional

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			BASE_URL: "https://3001-aquamarine-butterfly-d1y8h28g.ws-eu16.gitpod.io/api/",
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

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
