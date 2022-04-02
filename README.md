# vscode-sql-template-literal-ts

Syntax highlighting for code like:

```js
const query = sql`SELECT * FROM users`;
```

...but also for this:

```ts
const query = sql<queries.SelecteOneUser>`SELECT * FROM users`;
```

### Packaging and installation

From https://code.visualstudio.com/api/working-with-extensions/publishing-extension:

```
vsce package
```

Then "Install from VSIX" in Extensions panel inside VS Code.