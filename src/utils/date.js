import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat" // load on demand
dayjs.extend(advancedFormat) // use plugin

export const formatDate = () => {
	var arrDay = []
	for (let i = 0; i < 6; i++) {
		const day = dayjs().add(i, "day").valueOf()
		var dayToday = ""
		switch (dayjs(day).day()) {
			case dayjs().day():
				dayToday = "Hôm nay"
				break
			case 0:
				dayToday = "Chủ nhật"
				break
			case 1:
				dayToday = "Thứ hai"
				break
			case 2:
				dayToday = "Thứ ba"
				break
			case 3:
				dayToday = "Thứ tư"
				break
			case 4:
				dayToday = "Thứ năm"
				break
			case 5:
				dayToday = "Thứ sáu"
				break
			case 6:
				dayToday = "Thứ bảy"
		}
		arrDay = [
			...arrDay,
			{
				dayNumber: dayjs(day).date() + "/" + dayjs(day).month(),
				dayToday: dayToday,
			},
		]
	}
	return arrDay
}

export const urlencode = (str) => {
	str = (str + "").toString()

	// Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
	// PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
	return encodeURIComponent(str)
		.replace("!", "%21")
		.replace("'", "%27")
		.replace("(", "%28")
		.replace(")", "%29")
		.replace("*", "%2A")
		.replace("%20", "+")
}
