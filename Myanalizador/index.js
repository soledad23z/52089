import antlr4 from 'antlr4';
import fs from 'fs';
import JavaScriptGrammarLexer from './generated/JavaScriptGrammarLexer.js';
import JavaScriptGrammarParser from './generated/JavaScriptGrammarParser.js';
import JavaScriptGrammarVisitor from './generated/JavaScriptGrammarVisitor.js';

// Leer input
const input = fs.readFileSync('./input.txt', 'utf8');
console.log("Analizando archivo...\n");

// Crear flujo de caracteres
const chars = new antlr4.InputStream(input);

// Crear lexer y token stream
const lexer = new JavaScriptGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// Mostrar tabla de tokens
tokens.fill();
console.log(" Tabla de tokens:");
tokens.tokens.forEach(token => {
    if (token.type !== -1) {
        const tokenName =
  JavaScriptGrammarLexer.symbolicNames[token.type] ||
  JavaScriptGrammarLexer.literalNames[token.type] ||
  'null';
        console.log(`<${tokenName || 'null'}: '${token.text}'>`);
    }
});

// Crear parser
const parser = new JavaScriptGrammarParser(tokens);
parser.buildParseTrees = true;

// Agregar listener de errores
class ErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        console.error(`X Error en línea ${line}, columna ${column}: ${msg}`);
    }
}
parser.removeErrorListeners();
parser.addErrorListener(new ErrorListener());
lexer.removeErrorListeners();
lexer.addErrorListener(new ErrorListener());

// Parsear desde la regla inicial
const tree = parser.program();

// Mostrar el árbol
console.log("\n Árbol de análisis sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));

// Interpretar con visitor personalizado
class Interpreter extends JavaScriptGrammarVisitor {
    constructor() {
        super();
        this.variables = {}; // Para almacenar variables
    }

    visitFunctionDeclaration(ctx) {
        return this.visitChildren(ctx);
    }

    visitFunctionBody(ctx) {
        return this.visitChildren(ctx);
    }

    visitAssignment(ctx) {
        const name = ctx.Identifier().getText();
        const value = ctx.expression().getText().replace(/"/g, "");
        this.variables[name] = value;
        console.log(`📝 Variable asignada: ${name} = "${value}"`);
        return null;
    }

    visitConsoleStatement(ctx) {
        let expr = ctx.expression().getText();

        // Reemplazar variables por sus valores
        const result = expr.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, (match) =>
            this.variables[match] !== undefined ? `"${this.variables[match]}"` : match
        );

        console.log(` Ejecutando console.log(${result})`);
        return null;
    }
}

// Ejecutar el visitor
const visitor = new Interpreter();
visitor.visit(tree);
