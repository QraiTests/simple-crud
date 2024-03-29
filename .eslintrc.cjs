module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser'
		// sourceType: 'module',
	},
	plugins: ['vue', 'prettier', '@typescript-eslint'],
	ignorePatterns: ['server.js'],
	rules: {
		// Prettier
		'prettier/prettier': ['error'],
		// Classic
		'no-unused-vars': 'off',
		'comma-dangle': ['error', 'never'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'max-len': 'off',
		'no-underscore-dangle': [2, { allow: ['_id', '_s'] }],
		'no-plusplus': 'off',
		'class-methods-use-this': 'off',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'lines-between-class-members': 'off',
		'no-unused-expressions': ['error', { allowShortCircuit: true }],
		'import/prefer-default-export': 'off',
		// Vue
		'vue/no-v-html': 'off',
		'vue/comma-dangle': ['error', 'never'],
		'vue/multi-word-component-names': 'off',
		'vue/script-indent': ['error', 'tab', { baseIndent: 0 }],
		// TS
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'off'
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.vue', '.ts', '.tsx'],
				moduleDirectory: ['node_modules/', 'src/']
			}
		}
	}
};
