
//variabile endpoint chiamata axios
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//mi recupero card-number dal dom
let cardNumber = document.getElementById("card-number")


//chiamata axios 
//nel get devo mettere cosa voglio "chiamare"
//.then "e dopo" mostro il contenuto a cui ho dato nome resp
axios.get(endpoint).then((resp) =>{
    //mi mostra l'array di oggetti al suo interno
    console.log(resp.data)
//dichiaro che card è uguale al contenuto di axios
    const card = resp.data;
// mi creo un ciclo for per ciclare il contenuto di cardBox e incrementare 
    for (let i = 0; i < card.length; i++){
        //inserisco tutto il mio html scritto in precedenza 
        //al posto del testo, titolo e immagine, vado ad inserire le key
        //per fare in modo che mi vengano visualizzate l'informazioni dell'API (array di oggetti con le loro key) all'interno di innerHTML
        let cardBox =
        `<div class="col-md-6 col-lg-4">
                <div class="card p-3">
                    <img class="pin " src="./img/microsopic-of-red-blood-cells-flowing-through-the-blood-vessels-medical-and-science-research-concept-generative-ai-png.webp"
                        alt="">
                    <img src="${card[i].url}" class="card-img-top  " alt="...">
                    <div class="card-body">
                        <p id="title" class="card-text">${card[i].title}</p>
                        <p id="date" class="card-date">${card[i].date}</p>
                    </div>
                </div>
            </div>` 
            //uso innerHTML per "stampare" in pagina card box con tutti i suoi dati
            cardNumber.innerHTML += cardBox;
    }

})

//mi recupero dal dom overlay img e btn
const overlay = document.getElementById("overlay")
const overlayImage = document.getElementById("overlay-img")
const overlayCloseBtn = document.getElementById("overlay-btn")
//aggiungo l'evento click sul pusante che mi applica d-done al click
overlayCloseBtn.addEventListener("click",()=>{
    overlay.classList.add("d-none")
})

cardNumber.addEventListener("click",()=>{
    
})