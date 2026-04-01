#Setting up
`npm init`

## Typescript

`npm i typescript -D`

## Initiate type script to create a tsconfig.json file

`npx tsc --init`

## Install types for node (dev mode only)

`npm i @types/node -D`

## Make a "src" directory and create a file

`mkdir src`
make index.ts file

## install express

`npm i express`

## Install express types

`npm i @types/express -D` or
`npm i @types/express -D`

## Install ts-node and nodemon as development dependencies

`npm i ts-node nodemon -D`

## Create a nodemon.json file like below

    ```json
    {
        "watch": ["src"],
        "ext": ".js, .ts",
        "exec": "npx ts-node ./src/index.ts"
    }
    ```

## Edit package.json

```json
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon" // This line to be added
  },
```

## Creae an index.ts file to test the server

```javascript
import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## create different folders in src directory

        1. Controllers
        2. exceptions
        3. middleware
        4. routes
        5. schemas

## Dr Danish is a good guy
