import API from "../../api"

export default {
	getAll: () => API().get(`/movies`),
	getDetail: (eventId) => API().get(`/movies/${eventId}`),
}
