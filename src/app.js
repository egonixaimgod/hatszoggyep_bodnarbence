elsoTelekOldal = document.querySelector("#elsoTelekOldal");
masodikTelekOldal = document.querySelector("#masodikTelekOldal");
szamolButton = document.querySelector("#button");
teruletKiszamitas = document.querySelector("#terulet");

szamolButton.addEventListener('click', () => {
    let eredmeny = ( 3/2 * Math.pow(Number(elsoTelekOldal.value), 2) * Math.sqrt(3) ) + ( ( 3/2 * Math.pow(Number(masodikTelekOldal.value), 2) * Math.sqrt(3) ) / 2 );
    teruletKiszamitas.value = eredmeny;
});
