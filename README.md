# For front-end sharing about ts with node, it covers:

## Typescript concept

### From wiki
TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical **superset of JavaScript**, and adds optional static typing to the language.

TypeScript is designed for development of large applications and transpiles to JavaScript.[4] As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.

### Target
Aim for both front-end and back-end, especially for large web applications.

Google has recently announced that it will start using Typescript internally alongside Java, so Full stack development in Typescript using Node as a runtime will likely become mainstream in the next few years and fulfill the old Java dream:

*Write Once, Run Anywhere - this is possible today with Typescript!*

but i don't think so...

## Typescript and javascript(es5, es6)
TypeScript is a language extension that adds features to ECMAScript 6

But it's compiler support ES5 as target also.
To understand these names--
https://johnpapa.net/es5-es2015-typescript/

Some features already supported by 2015 such as class, module, arrow function, optional parameter and default parameter.


## Some Compiler configurations
target es version

strict mode

## Online quick play
https://www.typescriptlang.org/play/index.html

## Run ts with node by yourself

### Prepare env
Suppose you have npm and node ready, run below script in a folder.

```
npm init
npm install typescript --save-dev
npm install ts-node --save-dev
npm install nodemon --save-dev
```

typescript is compiler

ts-node is runner for node

nodemon is to run with hot loading

### Prepare scripts
Add scripts to package.json


```
"scripts": {
    "start": "npm run build:live",
    "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts",
    "tsc:live": "./node_modules/.bin/tsc --watch",
    "tsc": "./node_modules/.bin/tsc"
  }
```

    
if you want to see the js file compiled, use tsc related scripts

## Type System

### Type Inference
Inference always on, whenever you define/set a variable.

Type is infered by properties. Static type system is by name.

Check code example...

### Type compatibility
Again, it is based on properties set.

### Define optional properties.

### What type 'any' does? 
A grammer suger...fixes all type related compile errors....because annotating a variable with type Any is essentially telling the compiler to bypass the type system, and in general not check type compatibility for this variable.

A variable of type Any is assumed to potentially have any property, like a plain Javascript object.

In coding, any can be assigned with any value, and can assign to any variables.

### Non-Nullable type

### Union and Intersection types
We may need to recconsider how to define the interfaces we have now.

### Array & Tuple

## Type Definitions
In Typescript 2 and beyond, essentially 4 scenarios in what concerns type definitions:
- No type definitions of any kind are available
- Type definitions are available and shipped together with the compiler itself. E.g. Promise
- A library does not ship with type definitions, but they can be installed separately. E.g.  node itself.
- A library ships with its own type definitions built-in, E.g. angular...

## Debug ts in vscode(optional)
launch.json in .vscode

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "launch ts program",
            "args": [
                "${relativeFile}"
            ],
            "runtimeArgs": [
                "--nolazy","-r","ts-node/register"
            ],
            "sourceMaps": true,
            "cwd": "${workspaceFolder}",
            "protocol":"inspector"
        }
    ]
}
```

better to check compiled js file in case of mystery errors...