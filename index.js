'use strict';

module.exports = {
	'extends': 'eslint:recommended',
	'rules': {
		'no-console': 'off',
		'comma-dangle': 2,
		'dot-location': [2, 'property'],
		'eqeqeq': 2,
		'func-call-spacing': 2,
		'func-style': 2,
		'global-require': 2,
		'new-parens': 2,
		'no-array-constructor': 2,
		'no-buffer-constructor': 2,
		'no-caller': 2,
		'no-duplicate-imports': 2,
		'no-eval': 2,
		'no-implicit-globals': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 2,
		'no-iterator': 2,
		'no-labels': 2,
		'no-multi-str': 2,
		'no-new-func': 2,
		'no-new-object': 2,
		'no-new-require': 2,
		'no-new-wrappers': 2,
		'no-octal-escape': 2,
		'no-path-concat': 2,
		'no-proto': 2,
		'no-return-await': 2,
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-shadow-restricted-names': 2,
		'no-throw-literal': 2,
		'no-undefined': 2,
		'no-unmodified-loop-condition': 2,
		'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
		'no-unused-vars': [2, { args: 'after-used', ignoreRestSiblings: true }],
		'no-var': 2,
		'no-void': 2,
		'no-whitespace-before-property': 2,
		'no-with': 2,
		'prefer-promise-reject-errors': 2,
		'prefer-rest-params': 2,
		'require-await': 2,
		'rest-spread-spacing': 2,
		'semi': 2,
		'semi-style': 2,
		'strict': 2,
		'wrap-iife': 2,
		'array-bracket-newline': [1, 'consistent'],
		'array-bracket-spacing': 1,
		'arrow-parens': [1, 'as-needed'],
		'arrow-spacing': 1,
		'block-spacing': 1,
		'brace-style': [1, '1tbs', { allowSingleLine: true }],
		'comma-spacing': 1,
		'comma-style': 1,
		'computed-property-spacing': 1,
		'dot-notation': 1,
		'eol-last': 1,
		'function-paren-newline': [1, 'consistent'],
		'generator-star-spacing': 1,
		'implicit-arrow-linebreak': 1,
		'indent': [1, 'tab', { SwitchCase: 1 }],
		'key-spacing': 1,
		'keyword-spacing': 1,
		'no-empty-function': 1,
		'no-extra-bind': 1,
		'no-floating-decimal': 1,
		'no-lone-blocks': 1,
		'no-lonely-if': 1,
		'no-mixed-operators': 1,
		'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
		'no-multi-spaces': 1,
		'no-multiple-empty-lines': [1, { max: 2, maxEOF: 0, maxBOF: 0 }],
		'no-trailing-spaces': 1,
		'no-undef-init': 1,
		'no-unneeded-ternary': 1,
		'no-useless-call': 1,
		'no-useless-computed-key': 1,
		'no-useless-concat': 1,
		'no-useless-constructor': 1,
		'no-useless-escape': 1,
		'no-useless-rename': 1,
		'no-useless-return': 1,
		'nonblock-statement-body-position': 1,
		'object-curly-newline': [1, { consistent: true }],
		'object-curly-spacing': [1, 'always'],
		'object-shorthand': 1,
		'operator-assignment': 1,
		'operator-linebreak': [1, 'before'],
		'padded-blocks': [1, 'never'],
		'prefer-arrow-callback': 1,
		'prefer-const': 1,
		'prefer-spread': 1,
		'prefer-template': 1,
		'quotes': [1, 'single'],
		'semi-spacing': 1,
		'space-before-blocks': 1,
		'space-before-function-paren': [1, 'never'],
		'space-in-parens': 1,
		'space-unary-ops': 1,
		'spaced-comment': 1,
		'switch-colon-spacing': 1,
		'template-curly-spacing': 1,
		'yoda': 1
	},
	'env': {
		'es6': true,
		'browser': true
	}
};
