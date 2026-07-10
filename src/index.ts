import * as readline from 'readline';
import { lexer } from './lexer.js';
import { parse } from './parser.js';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

console.log('MCBE RawText Generator v0.1.0');
console.log('Enter text below to convert it to rawtext.');

rl.on('line', (line) => {
	let tokens = lexer(line);
	let result = parse(tokens);

	console.log(JSON.stringify(result));
	process.stdout.write('> ');
})

process.stdout.write('> ');