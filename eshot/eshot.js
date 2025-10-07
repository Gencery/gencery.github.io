{
  async function getData() {

    let fetchResponse = await fetch("https://www.eshot.gov.tr/tr/UlasimSaatleri/288",
      {
        "body": "bisikletAparatliMi=False&hatId=505&hatYon=0",
        "method": "POST"
      })

    let html = fetchResponse.text();

    //let regexResult = (await html).matchAll(/>(\d{2}:\d{2})<\/span>/g);
    //let hours = [...regexResult].map(item => item[1]);
    console.log(html)
  }

  getData();
}