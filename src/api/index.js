import axios from "axios"

export default () => {
	return axios.create({
		baseURL: import.meta.env.VITE_API_URL,
		headers: {
			Accept: "application/json",
		},
	})
}
