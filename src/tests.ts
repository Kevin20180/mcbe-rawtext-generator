import { lexer } from './lexer.js';
import { parse } from './parser.js';

let translate = 'Item: %item.diamond.name\nItem2: %oi ';

console.log('Test 1 translate text:', translate);

let tokens = lexer(translate);
console.log('Test 1 translate lexer tokens:', tokens);

let result = parse(tokens);
console.log('Test 1 translate parse result: ', result);