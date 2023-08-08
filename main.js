let now = new Date();

function addPara(content, method) {
	let para = document.createElement("p");
	para[method] = content;
	document.body.append(para);
}

function getDayPeriodName() {
	let periodName = "";
	let weekDay = now.getDay();

	if (weekDay == 0) {
		periodName = "HareketSaatleriPazar";
	} else if (weekDay == 6) {
		periodName = "HareketSaatleriCtesi";
	} else {
		periodName = "HareketSaatleriHici";
	}

	return periodName;
}

function listNextHours(lineNo) {
	fetch("https://openapi.izmir.bel.tr/api/eshot/hareketsaatleri/" + lineNo)
		.then((res) => res.json())
		.then((data) => {
			if (!data) return;
			if (!data[getDayPeriodName()]) return;

			let nowHoursMins = now.toTimeString().slice(0, 5);
			let nextExpeditionHours = data[getDayPeriodName()]
				.map((hour) => hour.DonusSaat)
				.filter((hour) => hour >= nowHoursMins)
				.slice(0, 2);

			addPara(lineNo, "innerText");

			nextExpeditionHours.forEach((hour) => {
				addPara(hour, "innerText");
			});
		});
}

listNextHours("505");
listNextHours("267");
listNextHours("204");
listNextHours("847");
listNextHours("152");
