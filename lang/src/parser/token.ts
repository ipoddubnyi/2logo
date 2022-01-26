import { TokenType } from "./token-type";

export class Token {
    private readonly type: TokenType;
    private readonly value: string | undefined;

    // номер строки и символа в строке для вывода ошибок
    private line = 0;
    private char = 0;

    public constructor(type: TokenType, value?: string, line?: number, char?: number) {
        this.type = type;
        this.value = value;
        this.line = line ?? 0;
        this.char = char ?? 0;
    }

    public toString(): string
    {
        return this.value && this.value.length > 0 ?
            `${this.type}: ${this.value}` :
            this.type.toString();
    }
}
