# For front-end sharing about ts with node, it covers:

## Typescript concept from wiki

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.
TypeScript is designed for development of large applications and transpiles to JavaScript.[4] As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.

## Relationship between typescript and javascript(es5, es6 and es2015)
TypeScript is a language extension that adds features to ECMAScript 6
But it's compiler support ES5 and 2015 as target.
Some features already supported by 2015 such as class, module, arrow function, optional parameter and default parameter.


## Run ts in node && "browser"
package typescript and ts-node (nodemon to do it hot loading)
if you want to see the js file compiled, use tsc directly

## Compiler configurations
target es version
strict mode

## Type System -- Type Inference

statically-typed language: C#, Java...
dynamiclly-typed language: Js, Python...

combination: typescript

## Types of node
@types/node

## debug it in vscode(optional)
better to do trouble shooting in compiled js file
