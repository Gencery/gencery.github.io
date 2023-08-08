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
listNextHours("847");
listNextHours("152");



fetch("https://nevakit.com/wtb.php", {
	"credentials": "include",
	"headers": {
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
		"Accept": "*/*",
	},
	"referrer": "https://nevakit.com/otobusum-nerede/izmir/30562/tum-hatlar",
	"method": "POST"
}).then(res => res.text())
	.then(data => console.log(data));

