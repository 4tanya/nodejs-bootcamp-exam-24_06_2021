import { createContext } from "react";

export default createContext({
	user: null,
	setUser: (user) => {
		return user;
	},
	token: null,
	setToken: (token) => {
		return token;
	},
});
