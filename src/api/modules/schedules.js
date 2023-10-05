import API from "../../api"

export default {
	getAll: () => API().get(`/schedules`),
	getDetail: (eventId) => API().get(`/schedules/${eventId}`),
	getListByCinemas: (value) =>
		API().get(`/lstcinemas/id=${value.id}&date=${value.numberDay}`),
}
