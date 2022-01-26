import { Lexer } from "../lexer";
import { LexerException } from "../lexer.exception";
import { Token } from "../token";
import { TokenType } from "../token-type";
import { ITokenizer } from "./tokenizer";

export class MultilineCommentTokenizer implements ITokenizer {
    private readonly lexer: Lexer;

    public constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    public check(current: string): boolean {
        return current === "/" && this.lexer.peek(1) === "*";
    }

    public tokenize(current: string): Token {
        this.lexer.next();
        this.lexer.next();

        current = this.lexer.peek(0);
        while (true) {
            if (current === "\0")
                throw new LexerException("Незакрытый комментарий.");

            if (current === "*" && this.lexer.peek(1) === "/")
                break;

            current = this.lexer.next();
        }

        this.lexer.next(); // *
        this.lexer.next(); // /

        return new Token(TokenType.Comment);
    }
}
