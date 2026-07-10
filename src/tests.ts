import { lexer } from './lexer.js';

let translate = 'Item: %item.diamond.name\nItem2: %oi ';

console.log('Test 1 translate text:', translate);
console.log('Test 1 translate lexer:', lexer(translate));