const TrancheAge = require('../trancheAge.js');
const Jouet = require('../jouet.js');
const Categorie = require('../categorie');


const assert = require('assert');

describe("Jouet",() => {

    describe("convenir",() => {
            let tranche48 = new TrancheAge(3,"tranche48",4,8);
            let categorie1 = new Categorie(1,"Plein Air");
            let unJouet = new Jouet(1,"Batmobile",tranche48,categorie1);

        it("Test âge inférieur à la borne min", () =>{
            assert.equal(unJouet.convenir(2), false);
        });

        it("Test âge égal à la borne min", () =>{
            assert.equal(unJouet.convenir(4), true);
        });

        it("Test âge entre les bornes", () =>{
            assert.equal(unJouet.convenir(5), true);
        });

        it("Test âge égal à la borne max", () =>{
            assert.equal(unJouet.convenir(8), true);
        });

        it("Test âge supérieur à la borne max", () =>{
            assert.equal(unJouet.convenir(12), false);
        });

    });
});