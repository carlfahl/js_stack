import Dog from './dog';

const str = 'ES6';
console.log(`Hello ${str}`);

function test() {
  const x = '1';
  console.log(x);
}

test();

const toby = new Dog('Toby');

console.log(toby.bark());
