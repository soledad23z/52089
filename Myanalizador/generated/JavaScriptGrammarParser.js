// Generated from JavaScriptGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaScriptGrammarListener from './JavaScriptGrammarListener.js';
import JavaScriptGrammarVisitor from './JavaScriptGrammarVisitor.js';

const serializedATN = [4,1,15,83,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,1,1,3,1,30,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,40,8,2,10,2,12,
2,43,9,2,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,4,1,4,3,4,53,8,4,1,5,1,5,1,5,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,65,8,6,1,7,1,7,1,7,5,7,70,8,7,10,7,12,7,
73,9,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,81,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,
0,1,1,0,11,12,82,0,19,1,0,0,0,2,25,1,0,0,0,4,36,1,0,0,0,6,47,1,0,0,0,8,52,
1,0,0,0,10,54,1,0,0,0,12,57,1,0,0,0,14,66,1,0,0,0,16,80,1,0,0,0,18,20,3,
2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,
0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,26,5,1,0,0,26,27,5,13,0,0,27,29,5,2,0,
0,28,30,3,4,2,0,29,28,1,0,0,0,29,30,1,0,0,0,30,31,1,0,0,0,31,32,5,3,0,0,
32,33,5,4,0,0,33,34,3,6,3,0,34,35,5,5,0,0,35,3,1,0,0,0,36,41,5,13,0,0,37,
38,5,6,0,0,38,40,5,13,0,0,39,37,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,
1,0,0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,46,3,8,4,0,45,44,1,0,0,0,46,49,1,0,
0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,7,1,0,0,0,49,47,1,0,0,0,50,53,3,10,5,
0,51,53,3,12,6,0,52,50,1,0,0,0,52,51,1,0,0,0,53,9,1,0,0,0,54,55,3,14,7,0,
55,56,5,7,0,0,56,11,1,0,0,0,57,58,5,8,0,0,58,59,5,9,0,0,59,60,5,10,0,0,60,
61,5,2,0,0,61,62,3,14,7,0,62,64,5,3,0,0,63,65,5,7,0,0,64,63,1,0,0,0,64,65,
1,0,0,0,65,13,1,0,0,0,66,71,3,16,8,0,67,68,7,0,0,0,68,70,3,16,8,0,69,67,
1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,15,1,0,0,0,73,71,1,
0,0,0,74,81,5,13,0,0,75,81,5,14,0,0,76,77,5,2,0,0,77,78,3,14,7,0,78,79,5,
3,0,0,79,81,1,0,0,0,80,74,1,0,0,0,80,75,1,0,0,0,80,76,1,0,0,0,81,17,1,0,
0,0,8,21,29,41,47,52,64,71,80];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JavaScriptGrammarParser extends antlr4.Parser {

    static grammarFileName = "JavaScriptGrammar.g4";
    static literalNames = [ null, "'function'", "'('", "')'", "'{'", "'}'", 
                            "','", "';'", "'console'", "'.'", "'log'", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "Identifier", 
                             "Number", "WS" ];
    static ruleNames = [ "program", "functionDeclaration", "parameterList", 
                         "functionBody", "statement", "expressionStatement", 
                         "consoleStatement", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavaScriptGrammarParser.ruleNames;
        this.literalNames = JavaScriptGrammarParser.literalNames;
        this.symbolicNames = JavaScriptGrammarParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JavaScriptGrammarParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.functionDeclaration();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 23;
	        this.match(JavaScriptGrammarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JavaScriptGrammarParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(JavaScriptGrammarParser.T__0);
	        this.state = 26;
	        this.match(JavaScriptGrammarParser.Identifier);
	        this.state = 27;
	        this.match(JavaScriptGrammarParser.T__1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 28;
	            this.parameterList();
	        }

	        this.state = 31;
	        this.match(JavaScriptGrammarParser.T__2);
	        this.state = 32;
	        this.match(JavaScriptGrammarParser.T__3);
	        this.state = 33;
	        this.functionBody();
	        this.state = 34;
	        this.match(JavaScriptGrammarParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JavaScriptGrammarParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(JavaScriptGrammarParser.Identifier);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 37;
	            this.match(JavaScriptGrammarParser.T__5);
	            this.state = 38;
	            this.match(JavaScriptGrammarParser.Identifier);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JavaScriptGrammarParser.RULE_functionBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 24836) !== 0)) {
	            this.state = 44;
	            this.statement();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JavaScriptGrammarParser.RULE_statement);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.expressionStatement();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JavaScriptGrammarParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.expression();
	        this.state = 55;
	        this.match(JavaScriptGrammarParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JavaScriptGrammarParser.RULE_consoleStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(JavaScriptGrammarParser.T__7);
	        this.state = 58;
	        this.match(JavaScriptGrammarParser.T__8);
	        this.state = 59;
	        this.match(JavaScriptGrammarParser.T__9);
	        this.state = 60;
	        this.match(JavaScriptGrammarParser.T__1);
	        this.state = 61;
	        this.expression();
	        this.state = 62;
	        this.match(JavaScriptGrammarParser.T__2);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 63;
	            this.match(JavaScriptGrammarParser.T__6);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JavaScriptGrammarParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.term();
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11 || _la===12) {
	            this.state = 67;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 68;
	            this.term();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JavaScriptGrammarParser.RULE_term);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.match(JavaScriptGrammarParser.Identifier);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.match(JavaScriptGrammarParser.Number);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            this.match(JavaScriptGrammarParser.T__1);
	            this.state = 77;
	            this.expression();
	            this.state = 78;
	            this.match(JavaScriptGrammarParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JavaScriptGrammarParser.EOF = antlr4.Token.EOF;
JavaScriptGrammarParser.T__0 = 1;
JavaScriptGrammarParser.T__1 = 2;
JavaScriptGrammarParser.T__2 = 3;
JavaScriptGrammarParser.T__3 = 4;
JavaScriptGrammarParser.T__4 = 5;
JavaScriptGrammarParser.T__5 = 6;
JavaScriptGrammarParser.T__6 = 7;
JavaScriptGrammarParser.T__7 = 8;
JavaScriptGrammarParser.T__8 = 9;
JavaScriptGrammarParser.T__9 = 10;
JavaScriptGrammarParser.T__10 = 11;
JavaScriptGrammarParser.T__11 = 12;
JavaScriptGrammarParser.Identifier = 13;
JavaScriptGrammarParser.Number = 14;
JavaScriptGrammarParser.WS = 15;

JavaScriptGrammarParser.RULE_program = 0;
JavaScriptGrammarParser.RULE_functionDeclaration = 1;
JavaScriptGrammarParser.RULE_parameterList = 2;
JavaScriptGrammarParser.RULE_functionBody = 3;
JavaScriptGrammarParser.RULE_statement = 4;
JavaScriptGrammarParser.RULE_expressionStatement = 5;
JavaScriptGrammarParser.RULE_consoleStatement = 6;
JavaScriptGrammarParser.RULE_expression = 7;
JavaScriptGrammarParser.RULE_term = 8;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_program;
    }

	EOF() {
	    return this.getToken(JavaScriptGrammarParser.EOF, 0);
	};

	functionDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_functionDeclaration;
    }

	Identifier() {
	    return this.getToken(JavaScriptGrammarParser.Identifier, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_parameterList;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptGrammarParser.Identifier);
	    } else {
	        return this.getToken(JavaScriptGrammarParser.Identifier, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_functionBody;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitFunctionBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitFunctionBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_statement;
    }

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_consoleStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptGrammarParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(JavaScriptGrammarParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(JavaScriptGrammarParser.Number, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptGrammarListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaScriptGrammarVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JavaScriptGrammarParser.ProgramContext = ProgramContext; 
JavaScriptGrammarParser.FunctionDeclarationContext = FunctionDeclarationContext; 
JavaScriptGrammarParser.ParameterListContext = ParameterListContext; 
JavaScriptGrammarParser.FunctionBodyContext = FunctionBodyContext; 
JavaScriptGrammarParser.StatementContext = StatementContext; 
JavaScriptGrammarParser.ExpressionStatementContext = ExpressionStatementContext; 
JavaScriptGrammarParser.ConsoleStatementContext = ConsoleStatementContext; 
JavaScriptGrammarParser.ExpressionContext = ExpressionContext; 
JavaScriptGrammarParser.TermContext = TermContext; 
