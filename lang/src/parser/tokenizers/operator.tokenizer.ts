import { Lexer } from "../lexer";
import { Token } from "../token";
import { TokenType } from "../token-type";
import { ITokenizer } from "./tokenizer";

export class OperatorTokenizer implements ITokenizer {
    
    private static readonly OPERATOR_CHARS: string = "+-*/()[]{}=<>!&|:;,";

    private static readonly OPERATORS: any = {
        "+": TokenType.Plus,
        "-": TokenType.Minus,
        "*": TokenType.Star,
        "/": TokenType.Slash,

        "(": TokenType.LParen,
        ")": TokenType.RParen,
        // "[": TokenType.LBracket,
        // "]": TokenType.RBracket,
        // "{": TokenType.LBrace,
        // "}": TokenType.RBrace,

        "=": TokenType.Eq,
        // "<": TokenType.Lt,
        // ">": TokenType.Gt,
        // "!": TokenType.Excl,
        // "&": TokenType.Amp,
        // "|": TokenType.Bar,

        // "==": TokenType.EqEq,
        // "!=": TokenType.ExclEq,
        // "<=": TokenType.LtEq,
        // ">=": TokenType.GtEq,

        // "&&": TokenType.AmpAmp,
        // "||": TokenType.BarBar,

        ":": TokenType.Colon,
        ";": TokenType.Semicolon,
        ",": TokenType.Comma
    };

    private readonly lexer: Lexer;

    public constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    public check(current: string): boolean {
        return OperatorTokenizer.OPERATOR_CHARS.includes(current);
    }

    public tokenize(current: string): Token {
        /*if (current == '/')
        {
            if (Peek(1) == '/') {
                Next();
                Next();
                TokenizeComment();
                return;
            } else if (Peek(1) == '*') {
                Next();
                Next();
                TokenizeMultilineComment();
                return;
            }
        }*/

        let buffer = "";
        while (true) {
            let text = buffer;
            if (!OperatorTokenizer.OPERATORS[text + current] && text && text.length > 0) {
                return new Token(OperatorTokenizer.OPERATORS[text]);
            }
            buffer += current;
            current = this.lexer.next();
        }
    }
}
