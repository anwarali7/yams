## Installation

```bash
# Les dépendances de dev
npm i --save-dev typescript @types/node concurrently nodemon
npm i --save-dev @types/express @types/cors

# Les dépendances de production
npm install express cors

```

## Description de certains fichiers

Ne touchez pas aux fichiers ci-dessous.

### Fichier package.json 

Attention pour la gestion des import/export dans TypeScript, respectez la configuration du tsconfig.json, pas la peine d'ajouter "type": "module" dans le package.json

- le module **concurrently** permet de transpiler le code ts vers js et de watcher les changements dans les fichiers de l'API.

```json
"scripts": {
    "dev": "concurrently \"tsc --watch\" \"nodemon dist/app.js\""
},
```

### Fichier tsconfig.json

Nous définissons les règles pour transpiler le code vers le JS à partir de TS.

```json
{
    "compilerOptions": {
        "outDir": "dist",
        "target": "es2022",
        "module": "CommonJS",
        "strict": true,
        "typeRoots": ["node_modules/@types"],
        "esModuleInterop": true
    },
    "include": [
        "src/**/*"
    ],
}
```
