import API from "../../api"

export default {
	getAll: () => API().get(`/movie`),
	getDetail: (eventId) => API().get(`/movie/${eventId}`),
}
