// File utils.js
export function tambah (a, b) {
    return a + b;
}
export const NAME = "Nashiruddin";

// File main.js
import { tambah, NAME } from './utils.js';
console.log(tambah(2, 3)); // Output: 5
console.log(NAME); // Output: Nashiruddin