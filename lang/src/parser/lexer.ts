import { Token } from "./token";
import { ITokenizer } from "./tokenizers";
import * as Tokenizer from "./tokenizers";
// import { TokenType } from "./tokenType";

export class Lexer {
    private readonly input: string;
    private readonly length: number;
    private readonly tokens: Token[];
    private readonly tokenizers: ITokenizer[];
    private position: number;

    public constructor(input: string) {
        this.input = input;
        this.length = input.length;
        this.tokens = [];
        this.position = 0;

        this.tokenizers = [
            new Tokenizer.NumberTokenizer(this),
            new Tokenizer.WordTokenizer(this),
            new Tokenizer.TextTokenizer(this),
            new Tokenizer.CommentTokenizer(this),
            new Tokenizer.MultilineCommentTokenizer(this),
            new Tokenizer.OperatorTokenizer(this),
            new Tokenizer.EndLineTokenizer(this),
        ];
    }

    public tokenize(): Token[] {
        let line = 1;
        let char = 0;
        while (this.position < this.length) {
            // char += 1;
            const current = this.peek(0);
            var token = this.getCurrentToken(current);
            if (token != null) {
                this.addToken(token);
                // if (token.type === TokenType.EOL) {
                //     line += 1;
                //     char = 0;
                // }
            } else {
                // пробельные символы
                this.next();
            }
        }
        return this.tokens;
    }

    private getCurrentToken(current: string): Token | null {
        for (const tokenizer of this.tokenizers) {
            if (tokenizer.check(current))
                return tokenizer.tokenize(current);
        }

        return null;
    }

    public next(): string /* char */ {
        this.position++;
        return this.peek(0); // текущий символ
    }

    public peek(relativePos: number): string /* char */ {
        // 0 - текущий символ
        // 1 - следующий за текущим символ
        const pos = this.position + relativePos;
        if (pos >= this.length) return '\0';
        return this.input[pos];
    }

    //private addToken(type: TokenType, value: string = ""): void {
    //    this.tokens.push(new Token(type, value));
    //}

    private addToken(token: Token): void {
        this.tokens.push(token);
    }
}
