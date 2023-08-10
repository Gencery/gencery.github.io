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

function addDataToRow(row, tdData) {
	let td = document.createElement("td");
	td.innerText = tdData;
	row.append(td);
}

function listNextHours(lineNo) {
	let tableBody = document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
	let tr = document.createElement("tr");
	addDataToRow(tr, lineNo);
	tableBody.append(tr);

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



			nextExpeditionHours.forEach((hour) => {
				addDataToRow(tr, hour);
			});
		});
}


listNextHours("152");
listNextHours("267");
listNextHours("505");
listNextHours("847");
