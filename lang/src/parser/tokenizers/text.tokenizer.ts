import { Lexer } from "../lexer";
import { Token } from "../token";
import { TokenType } from "../token-type";
import { ITokenizer } from "./tokenizer";

export class TextTokenizer implements ITokenizer {
    private readonly lexer: Lexer;

    public constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    public check(current: string): boolean {
        return current === "\"";
    }

    public tokenize(current: string): Token {
        this.lexer.next(); // skip "
        let buffer = "";

        current = this.lexer.peek(0);
        while (true) {
            if ("\\" === current) {
                current = this.lexer.next();
                switch (current) {
                    case "\"":
                        current = this.lexer.next();
                        buffer += "\"";
                        continue;
                    case "r": // Windows
                        current = this.lexer.next();
                        buffer += "\r";
                        continue;
                    case "n":
                        current = this.lexer.next();
                        buffer += "\n";
                        continue;
                    case "t":
                        current = this.lexer.next();
                        buffer += "\t";
                        continue;
                }
                buffer += "\\"; // TODO: разобраться с экранированием
                continue;
            }

            if ("\"" === current)
                break;

            buffer += current;
            current = this.lexer.next();
        }
        this.lexer.next(); // skip closing "

        return new Token(TokenType.Text, buffer);
    }
}
