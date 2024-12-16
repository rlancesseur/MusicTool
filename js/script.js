const iconeGuitare = document.querySelector("#iconeGuitare")
const iconeBasse = document.querySelector("#iconeBasse")
const iconeMetronome = document.querySelector("#iconeMetronome")
const pageGuitare = document.querySelector("#pageGuitare")
const pageBasse = document.querySelector("#pageBasse")
const pageMetronome = document.querySelector("#pageMetronome")
const notes = document.querySelectorAll(".cercle")
const btnMoins = document.querySelector("#btnMoins")
const btnplay = document.querySelector("#play")
const btnPlus = document.querySelector("#btnPlus")
const inputMetronome = document.querySelector("#inputMetronome")
inputMetronome.value = 100

iconeGuitare.addEventListener("click", () => {
    pageBasse.style.display = "none"
    pageMetronome.style.display = "none"
    pageGuitare.style.display = "flex"
})

iconeBasse.addEventListener("click", () => {
    pageGuitare.style.display = "none"
    pageMetronome.style.display = "none"
    pageBasse.style.display = "flex"
})

iconeMetronome.addEventListener("click", () => {
    pageGuitare.style.display = "none"
    pageBasse.style.display = "none"
    pageMetronome.style.display = "flex"
})

notes.forEach(note => {
    note.addEventListener("click", () => {
        const sonNote = note.id
        const audio = new Audio("assets/son/" + sonNote + ".mp3")
        audio.play()
    })
})

btnMoins.addEventListener("click", () => {
    inputMetronome.value --
})

btnPlus.addEventListener("click", () => {
    inputMetronome.value ++
})

//Métronome à finir
// btnplay.addEventListener("click", () => {

// })
