import { type Token, type TokenType } from "./lexer.js"
import type { RawMessage, RawText } from "./rawtext.js"

export const resolvers: Record<TokenType, ResolverFn> = {
	'text': (token) => {
		return { text: token.content }
	},
	'translate_key': (token) => {
		return { translate: token.content }
	}
}

export type ResolverFn = (token: Token) => RawMessage;

export function parse(tokens: Token[]): RawText {
	let rawtext: RawMessage[] = [];

	for(const token of tokens) {
		const resolverFn = resolvers[token.type];
		const resolverResult = resolverFn(token);
		rawtext.push(resolverResult);
	}

	return { rawtext }
}