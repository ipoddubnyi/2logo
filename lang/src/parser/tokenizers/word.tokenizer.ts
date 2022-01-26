import { Char } from "@/utils/char";
import { KeyWords } from "../key-words";
import { Lexer } from "../lexer";
import { Token } from "../token";
import { TokenType } from "../token-type";
import { ITokenizer } from "./tokenizer";

export class WordTokenizer implements ITokenizer {
    private readonly lexer: Lexer;

    public constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    public check(current: string): boolean {
        return Char.isLetter(current);
    }

    public tokenize(current: string): Token {
        let buffer = "";

        while (true) {
            if (!Char.isLetterOrDigit(current) && current !== "_") {
                break;
            }

            buffer += current;
            current = this.lexer.next();
        }

        return this.analizeToken(buffer);
    }

    private analizeToken(word: string): Token {
        if (word === KeyWords.Let)
            return new Token(TokenType.Let);

        if (word === KeyWords.If)
            return new Token(TokenType.If);

        if (word === KeyWords.Else)
            return new Token(TokenType.Else);

        if (word === KeyWords.While)
            return new Token(TokenType.While);

        /*if (word === KeyWords.Do)
            return new Token(TokenType.Do);

        if (word === KeyWords.For)
            return new Token(TokenType.For);

        if (word === KeyWords.Break)
            return new Token(TokenType.Break);

        if (word === KeyWords.Continue)
            return new Token(TokenType.Continue);*/

        if (word === KeyWords.True)
            return new Token(TokenType.Boolean, true.toString());

        if (word === KeyWords.False)
            return new Token(TokenType.Boolean, false.toString());

        /*switch (word)
        {
            //case "print":
            //    //AddToken(TokenType.Print);
            //    break;
            //case "def":
            //    //AddToken(TokenType.Def);
            //    break;
            //case "return":
            //    //AddToken(TokenType.Return);
            //    break;
        }*/

        return new Token(TokenType.Word, word);
    }
}
