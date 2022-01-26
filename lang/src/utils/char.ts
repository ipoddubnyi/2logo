export class Char {

    public static isDigit(char: string): boolean {
        return /\d/.test(char);
    }

    public static isLetter(char: string): boolean {
        return /\p{L}/u.test(char);
    }

    public static isLetterOrDigit(char: string): boolean {
        return Char.isDigit(char) || Char.isLetter(char);
    }
}
