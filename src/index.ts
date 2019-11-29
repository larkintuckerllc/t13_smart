/* eslint-disable no-console */
// type Cons = [number, Cons]; // CIRCULAR REFERENCE

interface Cons {
  value: number;
  next: Cons;
}

class Counter {
  value = 0;

  increment() {
    this.value += 1;
  }
}

const list: Cons = {
  value: 0,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

const a: Cons = {
  value: 5,
  next: {
    value: 10,
    next: null,
  },
};

const b: Cons = {
  value: 3,
  next: a,
};

const c: Cons = {
  value: 4,
  next: a,
};

const counter = new Counter();
console.log(counter.value); // 0
counter.increment();
console.log(counter.value); // 1
