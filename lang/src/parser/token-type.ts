export enum TokenType {
    NumberInteger = "integer",
    NumberDouble = "double",
    Boolean = "boolean",
    Word = "word",
    Text = "text",

    Let = "let",
    If = "if",
    Else = "else",
    While = "while",
    // For = "for",
    // Do = "do",
    // Break = "break",
    // Continue = "continue",
    // Return = "return",

    Plus = "+",   // +
    Minus = "-",  // -
    Star = "*",   // *
    Slash = "/",  // /

    Eq = "=",     // =
    // EqEq = "==",   // ==
    // Excl = "!",   // !
    // ExclEq = "!=", // !=
    // Lt = "<",     // <
    // LtEq = "<=",   // <=
    // Gt = ">",     // >
    // GtEq = ">=",   // >=

    // Bar = "|",    // |
    // BarBar = "||", // ||
    // Amp = "&",    // &
    // AmpAmp = "&&", // &&

    LParen = "(", // (
    RParen = ")", // )
    // LBracket = "[", // [
    // RBracket = "]", // ]
    // LBrace = "{", // {
    // RBrace = "}", // }

    Colon = ":", // :
    Semicolon = ";", // ;
    Comma = ",",  // ,

    Comment = "//",

    EOL = "EOL",

    EOF = "EOF"
}
