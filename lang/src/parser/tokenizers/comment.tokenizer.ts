import { Lexer } from "../lexer";
import { Token } from "../token";
import { TokenType } from "../token-type";
import { ITokenizer } from "./tokenizer";

export class CommentTokenizer implements ITokenizer {
    private readonly lexer: Lexer;

    public constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    public check(current: string): boolean {
        return current === "/" && this.lexer.peek(1) === "/";
    }

    public tokenize(current: string): Token {
        this.lexer.next();
        this.lexer.next();

        let comment = "";
        current = this.lexer.peek(0);
        while (!"\r\n\0".includes(current)) {
            comment += current;
            current = this.lexer.next();
        }

        return new Token(TokenType.Comment, comment);
    }
}