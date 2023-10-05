import API from "../../api"

export default {
	getAll: () => API().get(`/cinemas`),
	getDetail: (eventId) => API().get(`/cinemas/${eventId}`),
}
