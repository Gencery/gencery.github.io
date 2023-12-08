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
		periodName = "sundays";
	} else if (weekDay == 6) {
		periodName = "saturdays";
	} else {
		periodName = "weekDays";
	}

	return periodName;
}

function addDataToRow(row, tdData) {
	let td = document.createElement("td");
	td.innerText = tdData;
	row.append(td);
}

function listNextHours(lineNo) {
	let tableBody = document
		.getElementsByTagName("table")[0]
		.getElementsByTagName("tbody")[0];
	let tr = document.createElement("tr");
	addDataToRow(tr, lineNo);
	tableBody.append(tr);

	fetch("./lines/" + lineNo + ".json")
		.then((res) => res.json())
		.then((data) => {
			if (!data) return;
			if (!data[getDayPeriodName()]) return;

			let nowHoursMins = now.toTimeString().slice(0, 5);
			let nextExpeditionHours = data[getDayPeriodName()]
				.map((hour) => hour.bwdHour)
				.filter((hour) => hour >= nowHoursMins)
				.slice(0, 2);

			nextExpeditionHours.forEach((hour) => {
				addDataToRow(tr, hour);
			});
		});
}
function listApproachingBuses(busStopNo) {
	let tableBody = document
		.getElementsByTagName("table")[1]
		.getElementsByTagName("tbody")[0];

	function addRow(lineNo, remaningBusStops) {
		let tr = document.createElement("tr");

		let td1 = document.createElement("td");
		let td2 = document.createElement("td");

		td1.innerText = lineNo;
		td2.innerText = remaningBusStops;

		tr.append(td1);
		tr.append(td2);

		return tr;
	}

	fetch(
		"https://openapi.izmir.bel.tr/api/iztek/duragayaklasanotobusler/" +
			busStopNo
	)
		.then((res) => res.json())
		.then((data) => {
			for (let item of data) {
				tableBody.append(addRow(item.HatNumarasi, item.KalanDurakSayisi));
			}
		});
}

listNextHours("152");
listNextHours("267");
listNextHours("505");
listNextHours("847");

listApproachingBuses("30562");
