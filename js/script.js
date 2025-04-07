
//variabile endpoint chiamata axios
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//chiamata axios 
//nel get devo mettere cosa voglio "chiamare"
//.then "e dopo" mostro il contenuto a cui ho dato nome resp
axios.get(endpoint).then((resp) =>{
    //mi mostra l'array di oggetti al suo interno
    console.log(resp.data)
//dichiaro che card è uguale al contenuto di axios
    const card = resp.data;

    for (let i = 0; i < card.length; i++){
        let cardBox =
        `<div class="col-md-6 col-lg-4">
                <div class="card p-3" id="card-number">
                    <img class="pin " src="./img/microsopic-of-red-blood-cells-flowing-through-the-blood-vessels-medical-and-science-research-concept-generative-ai-png.webp"
                        alt="">
                    <img src="${card.url}" class="card-img-top  " alt="...">
                    <div class="card-body">
                        <p id="title" class="card-text">${card.title}</p>
                        <p id="date" class="card-date">${card.date}</p>
                    </div>
                </div>
            </div>` 
    }

})