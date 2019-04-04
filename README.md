# vue-ts-eslint-semi

This example project shows eslint's `no-extra-semi` and `semi` rules conflict on TypeScript interfaces.

Run `npm install` and `npm run lint`. You will see output of eslint with errors on `src/interfaces/*.ts` files:

```bash
npm run lint

> vue-ts-eslint-semi@0.1.0 lint /projects/Github/vue-ts-eslint-semi
> vue-cli-service lint

error: Missing semicolon (semi) at src/interfaces/Customer.ts:4:2:
  2 |   id: string;
  3 |   name: string;
> 4 | };
    |  ^
  5 |


error: Unnecessary semicolon (no-extra-semi) at src/interfaces/Customer.ts:4:2:
  2 |   id: string;
  3 |   name: string;
> 4 | };
    |  ^
  5 |


error: Missing semicolon (semi) at src/interfaces/User.ts:7:2:
  5 |   name: string;
  6 |   customer?: Customer;
> 7 | }
    |  ^
  8 |
```

Also you can try to uncomment the `//'no-extra-semi': 'off',` line from the `.eslintrc.js` file and run `npm run lint` again:

```bash
npm run lint

> vue-ts-eslint-semi@0.1.0 lint /projects/Github/vue-ts-eslint-semi
> vue-cli-service lint

error: Missing semicolon (semi) at src/interfaces/Customer.ts:4:2:
  2 |   id: string;
  3 |   name: string;
> 4 | };;;;;;;;;;;
    |  ^
  5 |


error: Missing semicolon (semi) at src/interfaces/User.ts:7:2:
  5 |   name: string;
  6 |   customer?: Customer;
> 7 | };;;;;;;;;;
    |  ^
  8 |
```

Now eslint adds 10 semicolons to the end of each interface.
