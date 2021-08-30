const BASE_URL = "https://3001-aquamarine-butterfly-d1y8h28g.ws-eu16.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: ""
		},
		actions: {
			login: data => {
				fetch(BASE_URL.concat("login"), {
					method: "POST",
					body: JSON.stringify(data)
				})
					.then(response => {
						if (!response.ok) {
							throw new Error("Something went wrong");
						}

						return response.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson);
					})
					.catch(error => console.log(error));
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
