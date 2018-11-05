///
/// OBJECT DESTRUCTURING
///

// const person = {
//     name: 'Eric Scaglioni',
//     age: 30,
//     location: {
//         city: 'NYC',
//         temp: 100
//     }
// };

// // Uma forma de fazer
// //const name = person.name;
// //const age = person.age;

// // Usando o ES6 Destructuring
// const {name, age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;
// if(city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

// // Se quiser trocar o nome
// const { city: cidade } = person.location;
// console.log(`${cidade}`);

// // Valor default
// const person_2 = {
//     name: 'Teste',
//     age: 30,
//     location: {
//         city: 'NYC',
//         temp: 100
//     }
// };

// const {name: nome = 'Anonymous', age: idade} = person_2;
// console.log(`${nome} is ${idade}.`);


// Challenge time
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

///
/// ARRAY DESTRUCTURING
///

// const address = ['Rua Guarujá, 730', 'Ribeirão Preto', 'São Paulo', '14090102'];

// // Para desconstruir um array usa-se colchetes '[]' 
// // ao invés de chaves '{}' como nos objetos

// // Javascript pega por posição do array e não por nome
// //const [street, city, state, zip] = address;

// // Forma de pegar apenas os valores que quiser
// const [, city, state] = address;

// console.log(`You are in ${city}, ${state}`);

// // Valor default
// const address_2 = [];

// const [, , state_2 = 'Rio de Janeiro'] = address_2;
// console.log(`${state_2}`);

// Challenge time
const item = ['Coffe (cold)', '$2.00', '$2.50', '$2.75'];

const [coffe, , , largePrice] = item;

console.log(`A large ${coffe} costs ${largePrice}`);