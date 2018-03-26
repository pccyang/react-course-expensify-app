

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// // const { publisher: { name: publisherName = 'Self-published' } } = book
// const { name: publisherName = 'Self-published' } = book.publisher
// console.log(publisherName);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice,] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);