class Flock {
    constructor(n) {
        this.seagulls = n;
    }

    conjoin(other) {
        this.seagulls += other.seagulls;

        return this;
    }

    breed(other) {
        this.seagulls = this.seagulls * other.seagulls;

        return this;
    }
}

const a = new Flock(4);
const b = new Flock(2);
const c = new Flock(0);

// const result = a.conjoin(c).breed(b).conjoin(a.breed(b)).seagulls; // 32
