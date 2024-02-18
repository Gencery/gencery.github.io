function sektor(sektorName) {
	return `<div class="sektor">
      <p class="sektor-name">${sektorName}</p>
      <div class="tabs">
         <button class="btn-1">Yeniden adlandır</button>
         <button class="btn-1">Alt Sektörler</button>
         <button class="btn-danger">Sil</button>
      </div>
   </div>`;
}

let sektorler = { view: view() };

function view() {
	toggleLoadingDisplay("Yükleniyor...");
	fetch("https://idteizlemebackend.onrender.com/sektorler/list")
		.then((res) => res.json())
		.then((data) => {
			let sektorlerView = data.result.map((item) => sektor(item.name)).join("");

			let contentContainer =
				document.getElementsByClassName("panel-content")[0];
			contentContainer.innerHTML = `<div class="grid">
        ${sektorlerView}
      </div>`;
			toggleLoadingDisplay();
		});
}
