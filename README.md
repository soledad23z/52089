Analizador Sintáctico con ANTLR4 y Node.js

Este proyecto implementa un **analizador léxico y sintáctico** para una gramática reducida de JavaScript usando ANTLR4 y Node.js. El analizador procesa un archivo de entrada (`input.txt`) y verifica si el código cumple con la gramática definida.
 #Requisitos:
- [Node.js](https://nodejs.org/) 
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- Archivo `antlr-4.13.2-complete.jar` descargado y accesible
- Editor recomendado: Visual Studio Code
  
 # Cloná el repositorio:
git clone https://github.com/soledad23z/52089.git
cd mi-analizador
>Instalá las dependencias: npm install
>Generá los archivos a partir de la gramática:java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor - generated JavaScriptGrammar.g4
 #Ejecución del Analizador
>Ejecución del analizador:tener uno de los archivos de entrada copiado como input.txt en la raíz del proyecto.
ej:function saludar(nombre) {
  console.log(nombre);
}

>ejecutar el analizador:npm start
>Salida esperada:Entrada valida
 Analizando archivo...

Tabla de tokens:
<'function': 'function'>
<Identifier: 'saludar'>
...

Árbol de análisis sintáctico:
(program (functionDeclaration ... ))

 Ejecutando console.log(nombre)

