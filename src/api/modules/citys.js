import API from "../../api"

export default {
	getAll: () => API().get(`/citys`),
	getDetail: (eventId) => API().get(`/citys/${eventId}`),
}
