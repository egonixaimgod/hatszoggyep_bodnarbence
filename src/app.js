aElInput = document.querySelector("#aEl");
bElInput = document.querySelector("#aEl");
cElInput = document.querySelector("#aEl");
szamolButton = document.querySelector("#button");
terfogatKiszamitas = document.querySelector("#terfogat");

szamolButton.addEventListener('click', () => {
    let eredmeny = Number(aElInput.value) * Number(bElInput.value) * Number(cElInput.value);
    terfogatKiszamitas.value = eredmeny;
});