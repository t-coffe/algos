const ageEnfant = document.querySelector('#app button');

const age = ()=> {
const sign = prompt("Quel est votre âge ?");
if (sign.length === 0) {
    alert('merci de remplir le champs correctement')
} /* else if () {
    alert
} */ else if (sign < 6){
    alert('tout petit bébé')
} else if (sign < 8){
    alert("Poussin")
} else if (sign <10){
    alert("Pupille")
}else if (sign <12){
    alert("Minime")
}else if (sign > 11){
    alert("Cadet")
}}

ageEnfant.addEventListener('click', age);


const nomUtilisateur = document.querySelector('#nomUtilisateur button');

const TroisNoms = ()=> {
    const nomUn = prompt("premier nom");
    const nomDeux = prompt("deuxieme nom");
    const nomTrois = prompt("troisieme nom");
    if (nomUn < nomDeux && nomDeux < nomTrois) {
        alert("les noms sont dans l'ordre alphabetique");
    } else {
        alert("les noms ne sont pas dans l'ordre alphabetique");
    }
}

nomUtilisateur.addEventListener('click', TroisNoms);




const Horaire = document.querySelector('#Horaire button');

const funcTemps = ()=> {
    const heure = prompt("heure");
    const minute = prompt("minute");
    const temps = prompt("combien de mintues voulez vous ajouter ?");
    
    let affichageMT = parseInt(minute) + parseInt(temps);
    let affichageH = parseInt(heure);

    while (affichageMT > 59) {
        affichageMT-=60;
        if (affichageH === 23) {
            affichageH = 0 ;
        } else {
            affichageH ++;
        }
    }
    alert(affichageH + "h" + affichageMT); 
}


Horaire.addEventListener('click', funcTemps);



const facture = document.querySelector('#Facture button');

const funcFacture = ()=> {
    const nbPhotocopies = prompt("Veuillez indiquer le nombre de photocopies");
    let prixTotal = 0;
    if (nbPhotocopies >= 30) {
        prixTotal = (10 * 0.1) + (20 * 0.09) + ((nbPhotocopies - 30)*0.08);
    } else if (nbPhotocopies >= 10){
        prixTotal = (10 * 0.1) + ((nbPhotocopies - 10)*0.09);
    } else if (nbPhotocopies >= 1 && nbPhotocopies < 10){
        prixTotal = (nbPhotocopies*0.1);
    }
    alert(prixTotal);
}

facture.addEventListener('click', funcFacture);



const impotsZorglub = document.querySelector('.impotsZorglub button');

const funcImpots = ()=> {
    const genre = prompt('Veuillez indiquer votre genre, masculin / feminin ');
    const age = prompt('Veuillez indiquer votre âge ');
    if ((genre === "masculin" && age > 20) || (genre === "feminin" && age > 18 && age < 35)) {
        alert("vous DEVEZ payer les impots");
    } else {
        alert("vous NE devez PAS payer les impots");
    }
}

impotsZorglub.addEventListener('click', funcImpots);




const elections = document.querySelector('.elections button');

const funcElections = ()=> {
    const premierCandidat = parseInt(prompt('merci de mettre le score du premier candidat en pourcentage'));
    const deuxiemeCandidat = parseInt(prompt('merci de mettre le score du deuxieme candidat en pourcentage'));
    const troisiemeCandidat = parseInt(prompt('merci de mettre le score du troisieme candidat en pourcentage'));
    const quatriemeCandidat = parseInt(prompt('merci de mettre le score du quatrieme candidat en pourcentage'));
    if (premierCandidat + deuxiemeCandidat + troisiemeCandidat + quatriemeCandidat === 100) {
        if (premierCandidat > 50) {
            alert('le premier candidat est élu !');
        } else if (premierCandidat < 12.5 || deuxiemeCandidat > 50 || troisiemeCandidat > 50 || quatriemeCandidat > 50 ) {
            alert("le premier candidat a été vaincu !");
        } else if (premierCandidat > deuxiemeCandidat && premierCandidat > troisiemeCandidat && premierCandidat > quatriemeCandidat ) {
            alert('le premier candidat passe en ballotage FAVORABLE');
        } else {
            alert('le premier candidat passe en ballotage DEFAVORABLE');
        }
    } else {
        alert('merci de remplir les scores correctement');
    }
    
}

elections.addEventListener('click', funcElections);


const date = document.querySelector('.date button');

const funcDate = ()=> {
    const jour = (prompt('indiquer le jour en nombres'));
    const mois = (prompt('indiquer le mois en nombres'));
    const annee = (prompt("indiquer l'année en nombres"));

    let bissextile = (annee %4 === 0) && (annee % 100 != 0 ) && (annee % 400 === 0 );
    let MoisMax = 
    if (mois <= 12 || (jour < 31 &&  (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12)) || (jour < 30 &&  (mois === 4 || mois === 6 || mois === 9 || mois === 11 )) || (mois === 2 && (jour < 29 || ) )) {
        alert('date valide');
    } else {
        alert('date PAS valide');
    }
}

date.addEventListener('click', funcDate);

/* const assurance = document.querySelector('.assurance button');

const funcAssurance = ()=> {

} */