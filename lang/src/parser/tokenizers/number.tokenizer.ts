import { Char } from "@/utils/char";
import { Lexer } from "../lexer";
import { LexerException } from "../lexer.exception";
import { Token } from "../token";
import { TokenType } from "../token-type";
import { ITokenizer } from "./tokenizer";

export class NumberTokenizer implements ITokenizer {
    private readonly lexer: Lexer;

    public constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    public check(current: string): boolean {
        return Char.isDigit(current);
    }

    public tokenize(current: string): Token {
        let buffer = "";
        let point = false;

        while (true) {
            if (current === ".") {
                if (buffer.includes("."))
                    throw new LexerException("Неверный формат вещественного числа.");

                point = true;
            } else if (!Char.isDigit(current)) {
                break;
            }

            buffer += current;
            current = this.lexer.next();
        }

        return new Token(point ? TokenType.NumberDouble : TokenType.NumberInteger, buffer);
    }
}
