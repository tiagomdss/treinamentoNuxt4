// Basic ESLint config for Vue/Nuxt
import vue from 'eslint-plugin-vue'

export default [
  {
    files: ['**/*.{js,ts,vue}'],
    plugins: { vue },
    languageOptions: { parserOptions: { ecmaVersion: 'latest', sourceType: 'module' } },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  },
  ...vue.configs['flat/essential']
]
