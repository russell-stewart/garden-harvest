module.exports = class ProduceWeight {

    #weights;
    #n_shares;
    #n_coop_shares;
    #one_share;
    #coop_weights;

    constructor(n_shares , n_coop_shares) {
        this.#weights = {};
        this.#one_share = {};
        this.#coop_weights = {};
        this.#n_shares = n_shares;
        this.#n_coop_shares = n_coop_shares;
    }
    
    add_entry(veg , mass) {
        if(veg in this.#weights) {
            this.#weights[veg] = this.#weights[veg] + mass;
        }
        else {
            this.#weights[veg] = mass;
        }
        this.#calc_one_share();
        this.#calc_coop_weights();
    }


    #calc_one_share() {
        for (const [key, value] of Object.entries(this.weights)) {
            this.one_share[key] = value / this.#n_shares;
        }
    }

    #calc_coop_weights() {
        for (const [key, value] of Object.entries(this.one_share)) {
            this.#coop_weights[key] = value * this.#n_coop_shares;
        }
    }

    get one_share() {
        return this.#one_share;
    }

    get weights() {
        return this.#weights;
    }

    get coop_weights() {
        return this.#coop_weights;
    }
}