import JavaScriptGrammarListener from './generated/JavaScriptGrammarListener.js';
export class TestImport extends JavaScriptGrammarListener {
    enterStat(ctx){

console.log(`Se detectó una: ${ctx.constructor.name}`);
   }
}

