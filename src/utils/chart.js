export const handleChart = (chart) => {
	const base = 10 ** 1
	const medium = Math.round(chart * base)

	let color = ""
	if (chart < 5) {
		color = `conic-gradient(rgba(219, 35, 96)${
			chart * 36
		}deg,rgba(87, 20, 53,0.2)0deg)`
	} else if (chart < 7) {
		color = `conic-gradient(rgba(210,213,49)${
			chart * 36
		}deg,rgba(66,61,15,0.2)0deg)`
	} else if (chart < 10) {
		color = `conic-gradient(rgba(33, 208, 122)${
			chart * 36
		}deg,rgba(32, 69, 41,0.2)0deg)`
	}

	return { medium, color }
}
