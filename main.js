// Aggiungere a mano i vari elementi dell'array
let ceo = {nome: "Wayne Barnett", ruolo: "Founder & CEO", immagine: "wayne-barnett-founder-ceo.jpg"}

let chief = {nome: "Angela Caroll", ruolo: "Chief Editor", immagine: "angela-caroll-chief-editor.jpg"}

let office = {nome: "Walter Gordon", ruolo: "Office Manager", immagine: "walter-gordon-office-manager.jpg"}

let social = {nome: "Angela Lopez", ruolo: "Social Media Manager", immagine: "angela-lopez-social-media-manager.jpg"}

let developer = {nome: "Scott Estrada", ruolo: "Developer", immagine: "scott-estrada-developer.jpg"}

let graphic = {nome: "Barbara Ramos", ruolo: "Graphic Designer", immagine: "barbara-ramos-graphic-designer.jpg"}

// Creazione array con tutti i membri del team
let team =[ceo, chief, office, social, developer, graphic]
console.log(team)

for (let index = 0; index < team.length; index++) {
    const elemento = team[index];
    console.log( team[index].nome, team[index].ruolo)
}