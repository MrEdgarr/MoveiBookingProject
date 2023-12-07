import API from "../../api"

export default {
	getAll: () => API().get(`/schedule`),
	getDetail: (eventId) => API().get(`/schedule/${eventId}`),
	getListByCinemas: (value) =>
		API().get(`/lstcinemas/id=${value.id}&date=${value.numberDay}`),
}
