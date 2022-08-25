module.exports = grammar({
  name: 'Monkey',

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => repeat($._statement),
    _statement: $ => prec(9, seq(choice($.let_statement, $.return_statement, $.if_expression, $._expression), optional(';'))),
    let_statement: $ => seq("let", $.identifier, "=", $._expression),
    return_statement: $ => seq("return", $._expression),
    if_expression: $ => seq("if", $.condition, $.consequence, optional($.alternative)),
    condition: $ => seq("(", $._expression, ")"),
    consequence: $ => seq("{", repeat($._statement), "}"),
    alternative: $ => seq("else", "{", repeat($._statement), "}"),
    identifier: $ => /[a-zA-Z]+[a-zA-Z0-9]*/,
    call: $ => seq($.identifier, $.argument_list),
    function: $ => seq("fn", $.parameter_list, $.function_body),
    function_body: $ => seq("{", repeat($._statement), "}"),
    parameter_list: $ => seq("(", repeat(seq($.identifier, optional(","))), ")"),
    argument_list: $ => seq("(", repeat(seq($._expression, optional(","))), ")"),
    _expression: $ => prec.left(choice(
      $.call,
      $.function,
      $.boolean,
      $.binary_operator,
      $.unary_operator,
      $.integer,
      $.identifier
    )),
    boolean: $ => choice("true", "false"),
    unary_operator: $ => seq(choice('-'), $._expression),
    binary_operator: $ => prec.left(10, seq($._expression, choice("+", "-", "*", "/", ">", "<", "==", "!="), $._expression)),
    integer: $ => /\d+/
  }
});

