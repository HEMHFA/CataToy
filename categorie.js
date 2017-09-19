class Categorie {

    constructor(unLibelle) {
        this.libelle = unLibelle;
    }

    get libelle(){
        return this._libelle;
    }

}
module.exports = Categorie;