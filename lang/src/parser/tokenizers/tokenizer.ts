import { Token } from "../token";

export interface ITokenizer {
    check(current: string /* char */): boolean;
    tokenize(current: string /* char */): Token;
}
