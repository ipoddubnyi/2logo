import { Lexer } from "./parser/lexer";

try {
    const input = `
вперёд 10
направо 90
вперёд 10
направо 90
вперёд 10
направо 10
вперёд 10
`;

    console.log(input);
    console.log("----------");

    const tokens = new Lexer(input).tokenize();
    console.log(tokens);

} catch (e) {
    console.error(e);
}

/*

<digit> ::= \d

<integer> ::= <digit> | <digit> <integer>

<double> ::= <integer> . <integer>

<block>       ::= ':' {<statement>}* ';'

<statement> = <block>

<declaration> ::= <let> <identifier> = expression EOL

<if> = if expression statement


если а > б:
  сделать что-то
;

если а > б
  сделать что-то
иначе
  сделать что-то другое



// <module>      ::= {<function>}*
<EOL>           ::= '\n' 
<type>          ::= 'число' | 'строка'
<function>      ::= '(' <type> ')' <identifier> '(' <argument> {, <argument>}* ')' <block>
<argument>      ::= <identifier> ':' <type>
<statement>     ::= <block> | <declaration> | <assign> | <if-else> | <while> | <jump> | <call> | <EOL>
<declaration>   ::= 'пусть' <identifier> '=' <expression> <EOL>
<block>         ::= '{' {<statement>}* '}'
<call>          ::= <identifier> '(' {<expression>} {, expression}* ')'
<if-else>       ::= 'если' <expression> <block> { 'иначе' <block> }
<while>         ::= 'пока' <expression> <block>
<jump>          ::= 'вернуть' <expression> | 'прервать' | 'продолжить'
<assign>        ::= <identifier> = <expression> <EOL>
// <logical>     ::= <comparison> {( '&&' | '||' ) <comparison>}
// <comparison>  ::= <expression> {( == | != | > | >= | < | <= ) <expression>}
// <expression>  ::= <term> {(+|-) <term>}
// <term>        ::= <bitwise> {(*|/) <bitwise>}
// <bitwise>     ::= <factor> {( & | '|' | ^ | << | >> ) <factor>}
// <factor>        ::= ({ '~' | '!' | '-' | '+' } <number>) | <identifer> | <call>







https://habr.com/ru/post/571758/

<module>      ::= {<function>}*
<type>        ::= 'int'
<function>    ::= <type> <identifier> '(' <argument> {, <argument>}* ')' <block>
<argument>    ::= <type> <identifier>
<statement>   ::= <block> | <declaration> | <assign> | <if-else> | <while> | <jump> | <call>
<declaration> ::= <type> <identifier> {','<identifier>}* ';'
<block>       ::= '{' {<statement>}* '}'
<call>        ::= <identifier> '(' {<expression>} {, expression}* ')'
<if-else>     ::= 'if' '(' <condition> ')' <statement> { 'else' <statement> }
<while>       ::= 'while' '(' <condition> ')' <statement>
<jump>        ::= 'return' <expression> ';' | 'break' ';'
<assign>      ::= <identifier> = <expression> ';'
<logical>     ::= <comparison> {( && | '||') <comparison>}
<comparison>  ::= <expression> {( == | != | > | >= | < | <= ) <expression>}
<expression>  ::= <term> {(+|-) <term>}
<term>        ::= <bitwise> {(*|/) <bitwise>}
<bitwise>     ::= <factor> {( & | '|' | ^ | << | >> ) <factor>}
<factor>      ::= ({~|!|-|+} <number>) | <identifer> | <call>



*/
