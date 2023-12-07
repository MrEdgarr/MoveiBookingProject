import API from "../../api"

export default {
	getAll: () => API().get(`/city`),
	getDetail: (eventId) => API().get(`/city/${eventId}`),
}
