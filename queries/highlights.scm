
(function) @function
(integer) @number
(identifier) @variable
(let_statement 
  (identifier) @variable)
(call
  (identifier) @function)
(parameter_list
  (identifier) @variable)

[
"if"
"else"
] @conditional

[
"true"
"false"
] @boolean

[
"let"
] @keyword

[
"fn"
] @keyword.function

; Punctuation
[
","
";"
] @punctuation.delimiter

; Brackets
[
"("
")"
"["
"]"
"{"
"}"
] @punctuation.bracket

[
"+"
"-"
"*"
"/"
">"
"<"
"=="
"!=" 
] @operator

