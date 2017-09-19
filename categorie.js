class Categorie {

    constructor(unLibelle) {
        this._libelle = unLibelle;
        this._lesJouets = [];
    }

    get libelle(){
        return this._libelle;
    }

    ajouterJouets(unJouet){
        this._lesJouets.push(unJouet);
    }

    afficherJouets(display){
        this._lesJouets.forEach(function (unJouet){
            display(unJouet.libelle);
        });
    }


}
module.exports = Categorie;