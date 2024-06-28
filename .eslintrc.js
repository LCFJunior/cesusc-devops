module.exports = {
    parserOptions: {
      ecmaVersion: 2023, // ou versão compatível com seus recursos ECMAScript
      sourceType: 'module',
    },
    env: {
        // Defina o ambiente como Node.js para reconhecer variáveis globais do Node.js
        node: true,
    },

    globals: {
        // Adicione __dirname como uma variável global
        __dirname: 'readonly',
    },

    // Adicione o plugin node ao conjunto de plugins
    plugins: [
        'node',
    ],
    rules: {
        'node/no-unsupported-features/es-syntax': ['error', { allowModules: ['url'] }],
        'node/no-missing-import': ['error', { tryExtensions: ['.js', '.json', '.node'] }]
  }
}
  