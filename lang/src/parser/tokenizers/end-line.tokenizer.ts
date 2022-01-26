import { Lexer } from "../lexer";
import { Token } from "../token";
import { TokenType } from "../token-type";
import { ITokenizer } from "./tokenizer";

export class EndLineTokenizer implements ITokenizer {
    private readonly lexer: Lexer;

    public constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    public check(current: string): boolean {
        return current === "\n";
    }

    public tokenize(current: string): Token {
        this.lexer.next();
        return new Token(TokenType.EOL);
    }
}