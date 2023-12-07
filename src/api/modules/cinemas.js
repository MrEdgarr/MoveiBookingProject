import API from "../../api"

export default {
	getAll: () => API().get(`/cinema`),
	getDetail: (eventId) => API().get(`/cinema/${eventId}`),
}
