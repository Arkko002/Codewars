function formatDuration(seconds) {
	if (seconds === 0) {
		return "now";
	}

		
	let reduceFun = (srcVal, dstVal, limit) => {
		while (srcVal >= limit) {
			srcVal -= limit;
			dstVal++;
		}

		return [srcVal, dstVal];
	};

	let secondsRes = 0;
	let minutes = 0;
	let hours = 0;
	let days = 0;
	let years = 0;
	[secondsRes, minutes] = reduceFun(seconds, minutes, 60);
	[minutes, hours] = reduceFun(minutes, hours, 60);
	[hours, days] = reduceFun(hours, days, 24);
	[days, years] = reduceFun(days, years, 365);

	let durationObj = {
		"years": years,
		"days": days,
		"hours": hours,
		"minutes": minutes,
		"seconds": secondsRes,
	};

	let resStr = "";
	for (let [key, value] of Object.entries(durationObj)) {
		if(value > 0) {
			resStr += value + " " + key;
			if(value == 1) {
				resStr = resStr.slice(0, -1);
			}

			resStr += ", ";
		}
	}

	let lastComma = resStr.lastIndexOf(", ");
	resStr = resStr.slice(0, lastComma) + resStr.slice(lastComma).replace(", ", "")

	lastComma = resStr.lastIndexOf(", ");
	if (lastComma !== -1) {
		resStr = resStr.slice(0, lastComma) + resStr.slice(lastComma).replace(", ", " and ")
	}


	return resStr;
}
