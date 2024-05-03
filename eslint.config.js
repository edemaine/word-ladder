import civetPlugin from "eslint-plugin-civet/ts"
import solidPlugin from 'eslint-plugin-solid'

export default [
  // Rules from eslint.configs.recommended
  ...civetPlugin.configs.jsRecommended,
  // Rules from tseslint.configs.strict
  ...civetPlugin.configs.strict,
  // SolidJS
  solidPlugin.configs['flat/typescript'],
]
