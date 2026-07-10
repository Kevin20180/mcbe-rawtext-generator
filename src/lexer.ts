export interface Token {
	type: TokenType,
	content: string
}

export type TokenType = 'text' | 'translate_key';

export function lexer(code: string): Token[] {
	code = code + ' ';

	let tokens: Token[] = [];
	let nextToken: Token = { type: 'text', content: '' }

	for(let i = 0; i < code.length; i++) {
		let char = code[i];
		
		switch(nextToken.type) {
			case 'text':
				switch(char) {
					case '%':
						tokens.push(nextToken);
						nextToken = { type: 'translate_key', content: '' }
						break;
					default:
						nextToken.content += char;
				}
				break;
			case 'translate_key':
				switch(char) {
					case ' ':
					case '[':
					case '\n':
						tokens.push(nextToken);
						nextToken = { type: 'text', content: '' }
					default:
						nextToken.content += char;
				}
				break;
		}
	}

	return tokens;
}
