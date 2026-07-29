// Spread Operator pada Array
const angka1 = [1, 2];
const angka2 = [...angka1, 3, 4]
console.log(angka2); // Output: [1, 2, 3, 4]

// Spread Operator pada Object
const user1 = { nama: "Nashir", umur: 17 };
const user2 = { ...user1, hobi: "Coding" };
console.log(user2); // Output: { nama: 'Nashir', umur: 17, hobi: 'Coding' }

// Rest Operator pada Function
function hitung(...angka) {
  return angka.reduce((acc, curr) => acc + curr, 0);
}
console.log(hitung(1, 2, 3, 4)); // Output: 10
